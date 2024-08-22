import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import ListContainer from "./ListContainer";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
    const { pokemonList } = useContext(PokemonContext);

    return (
        <>
            {!pokemonList || pokemonList.length === 0 ? (
                <div>Loading...</div>
            ) : (
                <ListContainer>
                    {pokemonList.map((pokemon) => (
                        <li key={pokemon.id}>
                            <PokemonCard pokemon={pokemon} isSelected={false} />
                        </li>
                    ))}
                </ListContainer>
            )}
        </>
    );
};

export default PokemonList;
