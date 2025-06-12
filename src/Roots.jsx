import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Work from "./components/Work";
import Footer from "./components/Footer";
import Services from "./components/Services";
const Roots = () =>{
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/work" element={<Work/>} />
            <Route path="/footer" element={<Footer/>}/>
            <Route path="/services" element={<Services />}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default Roots;