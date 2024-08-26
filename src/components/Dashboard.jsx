import { useContext } from "react";
import styled from "styled-components";
import ListContainer from "./ListContainer";
import PokemonCard from "./PokemonCard";
import EmptyCard from "./emptyCard";
import { PokemonContext } from "../context/PokemonContext";

const DashboardContainer = styled.div`
    display: block;
    padding-bottom: var(--spacing-lg);
    margin-bottom: var(--spacing-lg);
    border-bottom: 1px solid var(--gray-color);
    transition: all ease 0.4s;
`;
const DashboardTitle = styled.h2`
    font-size: 3.2rem;
    text-align: center;
    margin-bottom: var(--spacing-lg);
`;

const EmptyText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 216px;
    padding: var(--spacing);
    color: #fff;
    background-color: var(--gray-color);
    border-radius: var(--border-radius-sm);
`;

const Dashboard = () => {
    const { selectedPokemon } = useContext(PokemonContext);
    const totalItems = 6;
    const displayedItems = selectedPokemon.slice(0, totalItems);
    const emptyItems = totalItems - selectedPokemon.length;

    return (
        <DashboardContainer>
            <DashboardTitle>나만의 포켓몬</DashboardTitle>

            {selectedPokemon.length === 0 ? (
                <EmptyText>선택된 포켓몬이 없습니다.</EmptyText>
            ) : (
                <ListContainer>
                    {/* 선택된 포켓몬을 먼저 렌더링 */}
                    {displayedItems.map((pokemon) => (
                        <li key={`pokemon-${pokemon.id}`}>
                            <PokemonCard pokemon={pokemon} isSelected={true} />
                        </li>
                    ))}
                    {/* 남은 공간에 EmptyCard를 렌더링 */}
                    {Array.from({ length: emptyItems }).map((item, index) => (
                        <li key={`empty-${index}`}>
                            <EmptyCard />
                        </li>
                    ))}
                </ListContainer>
            )}
        </DashboardContainer>
    );
};

export default Dashboard;
