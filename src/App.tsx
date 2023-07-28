import React from "react";
import "./App.css";
import PokemonList from "./components/PokemonList/PokemonList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokemonInfo from "./components/PokemonInfo/PokemonInfo";
import Todo from "./components/Todo/Todo";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/:pokemonName" element={<PokemonInfo />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/" element={<PokemonList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
