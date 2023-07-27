import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonsApi = createApi({
  reducerPath: "pokemonsApi",
  baseQuery: fetchBaseQuery({baseUrl: "https://pokeapi.co/api/v2/"}),
  endpoints: (build) => ({
    getPokemons: build.query<any,void>({
        query: () => 'pokemon',

    })
  })
});

export const {useGetPokemonsQuery} = pokemonsApi;
