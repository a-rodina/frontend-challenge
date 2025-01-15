import { configureStore } from "@reduxjs/toolkit";
import cardReducer from '../slice/cards';

const rootReducer = {
    card: cardReducer,
}

const store = configureStore({
    reducer: rootReducer
});

export default store;