// src/components/Homepage.jsx
import React, { useState } from "react";
import { useQuery } from "react-query";
import PokemonCard from "./PokemonCard";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

const fetchPokemonData = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data.results;
};

const Homepage = () => {
  const { data: pokemonList = [] } = useQuery("pokemonList", fetchPokemonData);
  const [keyword, setKeyword] = useState("");

  const filteredPokemonList = pokemonList.filter((pokemon) =>
    pokemon.name.includes(keyword.toLowerCase())
  );

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <div>
      <h1>Pokemon List</h1>
      <input
        type="text"
        placeholder="Enter keyword to filter"
        value={keyword}
        onChange={handleKeywordChange}
      />
      <div className="pokemon-list">
        {filteredPokemonList.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            imageUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url
              .split("/")
              .slice(-2, -1)}.png`}
          />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
