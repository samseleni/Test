import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import { pokemonsApi } from "./pokemonsApi";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
    reducer: {
        [pokemonsApi.reducerPath]: pokemonsApi.reducer,
        todos: todoReducer
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(pokemonsApi.middleware)
});

