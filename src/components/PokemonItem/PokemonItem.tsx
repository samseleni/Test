import React from 'react';
import "./styles.scss";

type PropTypes = {
    name: string,
  }
const PokemonItem = ({name}: PropTypes) => {
    return(
        <div className='item'>{name}</div>
    )
}

export default PokemonItem;