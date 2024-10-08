import styled from "styled-components";
import { CardStyle } from "./Card";
import pokeball from "../assets/images/pokeball.png";

const EmptyCardStyle = styled(CardStyle)`
    cursor: default;
    &:hover {
        transform: translateY(0) !important;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
`;
const EmptyCardImage = styled.img`
    width: 50%;
    aspect-ratio: 1/1;
    object-fit: contain;
    margin: auto;
`;

const EmptyCard = () => {
    return (
        <EmptyCardStyle>
            <EmptyCardImage src={pokeball} alt="포켓볼" />
        </EmptyCardStyle>
    );
};

export default EmptyCard;
