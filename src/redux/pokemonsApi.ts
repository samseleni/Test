import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TPokemonInfoRequest, TPokemonsRequest } from "./types";

export const pokemonsApi = createApi({
  reducerPath: "pokemonsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (build) => ({
    getPokemons: build.query<TPokemonsRequest, void>({
      query: () => "pokemon",
    }),
    getPokemonInfo: build.query<TPokemonInfoRequest, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

export const { useGetPokemonsQuery, useGetPokemonInfoQuery } = pokemonsApi;
