import React from 'react';
import { Link } from 'react-router-dom';
import "./styles.scss";

type PropTypes = {
    name: string,
  }
const PokemonItem = ({name}: PropTypes) => {
    return(
        <Link className='link-item' to={`/${name}`}>
            <div className='item'>{name}</div>
        </Link>
    )
}

export default PokemonItem;