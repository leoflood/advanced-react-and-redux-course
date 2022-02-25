import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Feature from './Feature';
import Header from './Header';
import Signin from './auth/Signin';
import Signout from './auth/Signout';
import Signup from './auth/Signup';
import Welcome from './Welcome';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        Hi, I'm the app
      </div>

      <Routes>
        <Route path="/" exact element={<Welcome />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signout" element={<Signout />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
