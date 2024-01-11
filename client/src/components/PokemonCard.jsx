import PropTypes from "prop-types";
import React from "react";

const PokemonCard = ({ name, imageUrl }) => {
  return (
    <div className="pokemon-card">
      <img src={imageUrl} alt={name} />
      <p>{name}</p>
    </div>
  );
};

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default PokemonCard;
