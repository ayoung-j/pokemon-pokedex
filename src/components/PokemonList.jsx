import ListContainer from "./ListContainer";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemonList, onAddPokemon }) => {
    if (!pokemonList || pokemonList.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <ListContainer>
            {pokemonList.map((pokemon) => (
                <li key={pokemon.id}>
                    <PokemonCard pokemon={pokemon} onAddPokemon={() => onAddPokemon(pokemon)} isSelected={false} />
                </li>
            ))}
        </ListContainer>
    );
};

export default PokemonList;
