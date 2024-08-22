import React from "react";
import styled from "styled-components";
import Card from "./Card";
import Button from "./Button";
import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

const CardTitle = styled.div`
    font-size: 1.6rem;
    text-align: center;
`;
const CardNo = styled.div`
    font-size: 1.6rem;
    text-align: center;
    color: var(--gray-color);
`;
const ButtonWrap = styled.div`
    width: 100%;
    margin-top: var(--spacing);
`;

const PokemonCard = ({ pokemon, isSelected }) => {
    const { onAddPokemon, onRemovePokemon } = useContext(PokemonContext);
    const { id, img_url, korean_name } = pokemon;

    const handleOnClick = (e) => {
        e.stopPropagation(); // 부모의 클릭 이벤트 전파 방지
        e.preventDefault(); // 기본 링크 이동 동작 방지

        if (isSelected) {
            onRemovePokemon(pokemon);
        } else {
            onAddPokemon(pokemon);
        }
    };

    return (
        <Card to={`/pokemon-detail?id=${id}`}>
            <img src={img_url} alt={korean_name} />
            <CardTitle>{korean_name}</CardTitle>
            <CardNo>No. {id}</CardNo>
            <ButtonWrap>
                <Button bgColor={isSelected ? "var(--red-color)" : "var(--blue-color)"} onClick={handleOnClick}>
                    {isSelected ? "삭제" : "추가"}
                </Button>
            </ButtonWrap>
        </Card>
    );
};

export default PokemonCard;
