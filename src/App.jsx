import React from "react";
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Body from "./page/Body";
import Choose from "./component/Choose";
const App = () => {

  return (

    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Body />}></Route>
        <Route path="/choose" element={<Choose />} />
      </Routes>

    </BrowserRouter>
  );
};

export default App;
