import { configureStore } from "@reduxjs/toolkit";
import pokemonSlice from "../slices/pokemonSlice";

const store = configureStore({
    reducer: {
        selectedPokemon: pokemonSlice,
    },
});

export default store;
