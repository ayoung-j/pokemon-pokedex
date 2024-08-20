import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import Dex from "../pages/Dex";

const Router = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dex" element={<Dex />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default Router;
