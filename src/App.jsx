import React from "react";
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from "./component/Header";
import Body from "./page/Body";
import Choose from "./component/Choose";
import Footer from "./component/Footer";
const App=()=> {

  return (
    
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element={<Body/>}></Route>
    <Route path="/choose" element={<Choose/>}/>
         </Routes>
         <Footer/>
    </BrowserRouter>
  );
};

export default App;
