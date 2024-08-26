import styled from "styled-components";
import { Link } from "react-router-dom";

const HomeLink = styled(Link)`
    display: inline-flex;
    align-items: center;
    font-size: 3.2rem;
    color: var(--gray-darken1-color);
    &:hover {
        color: var(--gray-lighten2-color);
        & > span {
            color: var(--yellow-color);
        }
    }
`;

const HomeLinkArrow = styled.span`
    padding-right: 10px;
    font-size: 4.8rem;
    color: var(--gray-darken1-color);
    transition: all ease 0.3s;
`;

const Home = () => {
    return (
        <section>
            <div className="container">
                <HomeLink to="/dex">
                    <HomeLinkArrow>▶</HomeLinkArrow>포켓몬 도감 시작하기
                </HomeLink>
            </div>
        </section>
    );
};

export default Home;
