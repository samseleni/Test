import React from "react";
import "./styles.scss";
import {
  useGetPokemonInfoQuery,
  useGetPokemonsQuery,
} from "../../redux/pokemonsApi";
import { TAbilities, TMoves, TResult } from "../../redux/types";
import { useParams } from "react-router-dom";

const PokemonInfo = () => {
  const { pokemonName = "" } = useParams();
  const { data } = useGetPokemonsQuery();
  const { data: pokemonInfo, isLoading } = useGetPokemonInfoQuery(pokemonName);
  if (isLoading) return <h1>Loading...</h1>;
  if (data && pokemonInfo) {
    const pokemons = data.results;
    const pokemon = pokemons.find(
      (pokemon: TResult) => pokemon.name === pokemonName
    );
    if (pokemon === undefined) {
      throw new TypeError("Такого покемона нет");
    }
    return (
      <div className="info">
        <h1>Подробная информация о {pokemon.name}</h1>
        <h2>Способности</h2>
        <ul>
          {pokemonInfo.abilities.map((item: TAbilities) => <li>{item.ability.name}</li>)}
        </ul>
        <h2>Формы</h2>
        <ul>
          {pokemonInfo.forms.map((item: TResult) => <li>{item.name}</li>)}
        </ul>
        <h2>Действия</h2>
        <ul>
          {pokemonInfo.moves.map((item: TMoves) => <li>{item.move.name}</li>)}
        </ul>
      </div>
    );
  } else return <h1>Такого покемона нет</h1>;
};

export default PokemonInfo;
