import React from "react";
import "./styles.scss";
import PokemonItem from "../PokemonItem/PokemonItem";
import { useGetPokemonsQuery } from "../../redux/pokemonsApi";
import { useSelector } from "react-redux";
import { TResult } from "../../redux/types";

const PokemonList = () => {
  // const count = useSelector((state: any) => console.log(state));
  const { data, isLoading } = useGetPokemonsQuery();
  if (isLoading) return <h1>Loading...</h1>;
  return (
    <>
      <h1 className="title">Покемоны</h1>
      <ul className="list">
        {data && data.results.map((item: TResult) => {
          return (
            <li key={item.name}>
              <PokemonItem name={item.name} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default PokemonList;
