import { configureStore } from "@reduxjs/toolkit";
import catReducer from '../slice/cats';

const rootReducer = {
    cat: catReducer,
}

const store = configureStore({
    reducer: rootReducer
});

export default store;