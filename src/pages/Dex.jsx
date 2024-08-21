import React, { useState } from "react";
import MOCK_DATA from "../constants/mock";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";

const Dex = () => {
    const [selectedPokemon, setSelectedPokemon] = useState([]);

    // 추가
    const handleAddPokemon = (pokemon) => {
        const displayedPokemon = selectedPokemon.slice(0, 6);
        const isSelected = selectedPokemon.find((item) => item.id === pokemon.id);

        if(isSelected){
            return alert("이미 등록된 포켓몬입니다.");
        }
        if(displayedPokemon.length >= 6){
            return alert("포켓몬은 최대 여섯개까지만 선택 할 수 있어요.");
        }

        setSelectedPokemon([...selectedPokemon, pokemon]);
    };

    // 삭제
    const handleRemovePokemon = (pokemon) => {
        const deletedPokemon = selectedPokemon.filter((item) => {
            return item.id !== pokemon.id;
        });

        setSelectedPokemon(deletedPokemon);
    };

    return (
        <>
            <Dashboard selectedPokemon={selectedPokemon} onRemovePokemon={handleRemovePokemon} />
            <PokemonList pokemonList={MOCK_DATA} onAddPokemon={handleAddPokemon} />
        </>
    );
};

export default Dex;
