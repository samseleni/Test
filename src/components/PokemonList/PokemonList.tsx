import React from "react";
import "./styles.scss";
import PokemonItem from "../PokemonItem/PokemonItem";
import { useGetPokemonsQuery } from "../../redux/pokemonsApi";
import { useSelector } from "react-redux";

const PokemonList = () => {
  const { data = [], isLoading } = useGetPokemonsQuery();
  if (isLoading) return <h1>Loading...</h1>;
  // const count = useSelector((state: RootState) => console.log(state))
  return (
    <>
      <h1 className="title">Покемоны</h1>
      <ul className="list">
        {data.results.map((item: { name: string }) => {
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
