import express from "express";
import http from "http";
import bodyParser from "body-parser";
import morgan from "morgan";
import router from "./router.js";
import mongoose from "mongoose";
import cors from "cors";

// DB setup
mongoose
  .connect("mongodb://localhost:27017/auth")
  .catch((error) => console.log(error));

// App setup
const app = express();
app.use(cors());
app.use(morgan("combined"));
app.use(bodyParser.json({ type: "*/*" }));
router(app);

// Server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log("Server listening on:", port);
