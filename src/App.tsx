import React from "react";
import "./App.css";
import PokemonList from "./components/PokemonList/PokemonList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokemonInfo from "./components/PokemonInfo/PokemonInfo";
import Todo from "./components/Todo/Todo";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/:pokemonName" element={<PokemonInfo />} />
          <Route path="/pokemons/:pokemonName" element={<PokemonInfo />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/pokemons" element={<PokemonList />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
