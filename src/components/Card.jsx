import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardStyle = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 216px;
    padding: var(--spacing);
    text-align: center;
    border: 1px solid var(--gray-lighten1-color);
    border-radius: var(--border-radius);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: all ease 0.3s;
    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 8px 10px rgba(0, 0, 0, 0.1);
    }
`;

const Card = ({ children, to }) => {
    return <CardStyle to={to}>{children}</CardStyle>;
};

export default Card;
