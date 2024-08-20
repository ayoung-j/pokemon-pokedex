import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const HeaderStyle = styled.header`
    display: flex;
    align-items: center;
    height: 70px;
    border-bottom: 1px solid var(--gray-darken2-color);
`;
const HeaderContainer = styled.div`
    display: flex;
    gap: 8px;
`;

const HeaderLink = styled(Link)`
    display: inline-flex;
    gap: 8px;
`;
const HeaderLinkCircle = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== "bgColor",
})`
    display: block;
    width: 36px;
    height: 36px;
    border-radius: 100%;
    background-color: ${(props) => props.bgColor};
    border: 3px solid var(--gray-lighten2-color);
`;
const HeaderLinkCircle2 = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== "bgColor",
})`
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 100%;
    background-color: ${(props) => props.bgColor};
    border: 1px solid var(--gray-color);
`;

const Contents = styled.main`
    position: relative;
    display: flex;
    flex: 1 0 auto;
    padding: 60px var(--gutter);
`;
const ContentsInner = styled.div`
    display: ${(props) => (props.$isHome ? "flex" : "block")};
    flex: 1 0 auto;
    align-items: ${(props) => (props.$isHome ? "center" : "")};
    justify-content: ${(props) => (props.$isHome ? "center" : "")};
    margin: 0 auto;
    padding: var(--gutter);
    max-width: calc(var(--container-width));
    background-color: ${(props) => (props.$isHome ? "var(--gray-color)" : "var(--gray-lighten2-color)")};
    border: 1px solid var(--gray-darken2-color);
    border-radius: var(--border-radius-sm);
    transition: all ease 0.4s;
`;

const FooterStyle = styled.footer`
    padding: 22px 0;
    text-align: center;
    border-top: 1px solid var(--gray-darken2-color);
`;

function Header() {
    return (
        <HeaderStyle>
            <HeaderContainer className="container">
                <HeaderLink to="/" title="홈으로 이동">
                    <HeaderLinkCircle bgColor="var(--blue-color)"></HeaderLinkCircle>
                </HeaderLink>
                <HeaderLink to="/dex" title="리스트로 이동">
                    <HeaderLinkCircle2 bgColor="var(--red-darken1-color)"></HeaderLinkCircle2>
                    <HeaderLinkCircle2 bgColor="var(--yellow-color)"></HeaderLinkCircle2>
                    <HeaderLinkCircle2 bgColor="var(--green-color)"></HeaderLinkCircle2>
                </HeaderLink>
            </HeaderContainer>
        </HeaderStyle>
    );
}

function Footer() {
    return (
        <FooterStyle>
            <div className="container">
                <p>ⓒ 2024. JoAyoung All rights reserved.</p>
            </div>
        </FooterStyle>
    );
}

function Layout({ children }) {
    const location = useLocation();
    const isHome = location.pathname === "/";

    return (
        <>
            <Header />
            <Contents>
                <ContentsInner $isHome={isHome}>{children}</ContentsInner>
            </Contents>
            <Footer />
        </>
    );
}

export default Layout;
