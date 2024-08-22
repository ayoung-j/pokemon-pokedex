import { useState } from "react";
import { styled } from "styled-components";
import VariablesStyle from "./styles/VariablesStyle.globals";
import FontsStyle from "./styles/FontsStyle";
import GlobalStyle from "./styles/GlobalStyle";
import Router from "./shared/Router";

function App() {
    return (
        <>
            <VariablesStyle />
            <FontsStyle />
            <GlobalStyle />
            <Router />
        </>
    );
}

export default App;
