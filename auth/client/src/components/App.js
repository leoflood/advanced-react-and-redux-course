import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./auth/Signup";
import Header from "./Header";
import Welcome from "./Welcome";

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        Hi, I'm the app
      </div>

      <Routes>
        <Route path="/" exact element={<Welcome />} />

        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};
