import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        addCard(state, action) {
            state.push(action.payload);
            console.log(action);
        },
        removeCard(state, action) {
            return state.filter(
                (card) => card.id !== action.payload,
            );
        },
        clearCard() {
            return [];
        },
    },
});

export const { addCard, removeCard, clearCard } =
    cardSlice.actions;
export default cardSlice.reducer;
