import { createSlice } from "@reduxjs/toolkit";

// state init
const initialState = [];

const pokemonSlide = createSlice({
    name: "selectedPokemon",
    initialState,
    reducers: {
        // 추가
        addPokemon: (state, action) => {
            const displayedPokemon = state.slice(0, 6);
            const isSelected = state.find((item) => item.id === action.payload.id);

            if (isSelected) {
                return alert("이미 등록된 포켓몬입니다.");
            }
            if (displayedPokemon.length >= 6) {
                return alert("포켓몬은 최대 여섯개까지만 선택 할 수 있어요.");
            }

            return [...state, action.payload];
        },
        // 삭제
        removePokemon: (state, action) => {
            const deletedPokemon = state.filter((item) => item.id !== action.payload.id);

            return [...deletedPokemon];
        },
    },
});

export const { addPokemon, removePokemon } = pokemonSlide.actions;
export default pokemonSlide.reducer;
