import passport from "passport";
import User from "../models/user.js";
import config from "../config.js";
import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt";
import LocalStrategy from "passport-local";

export default () => {
  // Create local strategy
  const localOptions = { usernameField: "email" };
  const localLogin = new LocalStrategy(
    localOptions,
    (email, password, done) => {
      // Verify this email and password, call done with the user
      // if it is the correct username and password
      // otherwise, call done with false
      User.findOne({ email }, (err, user) => {
        if (err) {
          return done(err);
        }

        if (!user) {
          return done(null, false);
        }

        // Compare passwords - is "password" equal to user.password?
        user.comparePassword(password, (err, isMatch) => {
          if (err) {
            return done(err);
          }

          if (!isMatch) {
            return done(null, false);
          }

          return done(null, user);
        });
      });
    }
  );

  // Setup options for JWT Strategy
  const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader("authorization"),
    secretOrKey: config.secret,
  };

  // Create JWT strategy
  const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
    // See if the user ID in the payload exists in our database
    // If it does, call "done" with that other
    // otherwise, call "done" without a user object
    User.findById(payload.sub, (err, user) => {
      if (err) {
        return done(err, false);
      }

      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    });
  });

  // Tell passport to use this strategy
  passport.use(jwtLogin);
  passport.use(localLogin);
};
