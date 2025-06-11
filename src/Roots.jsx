import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Work from "./components/Work";
const Roots = () =>{
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/work" element={<Work/>} />
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default Roots;