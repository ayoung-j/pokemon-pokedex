import MOCK_DATA from "../constants/mock";
import ListContainer from "./ListContainer";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
    const pokemonList = MOCK_DATA;

    return (
        <>
            {!pokemonList || pokemonList.length === 0 ? (
                <div>Loading...</div>
            ) : (
                <ListContainer>
                    {pokemonList.map((pokemon) => (
                        <li key={`list-${pokemon.id}`}>
                            <PokemonCard pokemon={pokemon} isSelected={false} />
                        </li>
                    ))}
                </ListContainer>
            )}
        </>
    );
};

export default PokemonList;
