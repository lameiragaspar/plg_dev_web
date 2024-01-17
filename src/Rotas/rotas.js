import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from "../Paginas/Home/index.js";
import LoadingPage from "../Paginas/LoadingPage/loadingPage.js";

const Rotas = () =>(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/loadingPage" element={<LoadingPage />}/>
        </Routes>
    </BrowserRouter>
)
export default Rotas