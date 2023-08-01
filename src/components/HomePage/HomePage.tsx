import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const HomePage = () => {
  return (
    <>
      <div className="buttons">
        <Link to="/pokemons"><button className="btn">Покемоны</button></Link>
        <Link to="/todo"><button className="btn">Todo</button></Link>
      </div>
    </>
  );
};

export default HomePage;