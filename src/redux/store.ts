import { configureStore } from "@reduxjs/toolkit";
import { pokemonsApi } from "./pokemonsApi";

export const store = configureStore({
    reducer: {
        [pokemonsApi.reducerPath]: pokemonsApi.reducer,
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(pokemonsApi.middleware)
});

