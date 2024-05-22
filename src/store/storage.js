import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './slice/card-slice';

const store = configureStore({
    reducer: {
        card: cardReducer,
    },
});
export default store;
