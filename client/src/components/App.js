import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
import { connect } from "react-redux";
import * as actions from "actions";

const App = ({ auth, changeAuth }) => {
  const renderButton = () => {
    if (auth) {
      return <button onClick={() => changeAuth(false)}>Sign out</button>;
    }

    return <button onClick={() => changeAuth(true)}>Sign in</button>;
  };

  const renderHeader = () => {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post a comment</Link>
        </li>
        <li>{renderButton()}</li>
      </ul>
    );
  };

  return (
    <BrowserRouter>
      <div>
        {renderHeader()}

        <Routes>
          <Route path="/post" element={<CommentBox />} />
          <Route path="/" exact element={<CommentList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps, actions)(App);
