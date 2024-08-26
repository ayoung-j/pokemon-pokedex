import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import Dex from "../pages/Dex";
import PokemonDetail from "../pages/PokemonDetail";

const Router = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dex" element={<Dex />} />
                    <Route path="/pokemon-detail" element={<PokemonDetail />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default Router;
