import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";
import { useAxios } from "./hooks";
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import "./PokeDex.css";

/* Renders a list of pokemon cards.
 * Can also add a new card at random,
 * or from a dropdown of available pokemon. */
function PokeDex(evt) {
  const [state,addCard] = useAxios(`https://pokeapi.co/api/v2/pokemon`)

 
  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your pokemon:</h3>
        <PokemonSelect add={addCard} />
      </div>
      <div className="PokeDex-card-area">
        {state.map(cardData => (
          <PokemonCard
            key={cardData.id}
            front={cardData.data.sprites.front_default}
            back={cardData.data.sprites.back_default}
            name={cardData.data.name}
            stats={cardData.data.stats.map(stat => ({
              value: stat.base_stat,
              name: stat.stat.name
            }))}
          />
        ))}
      </div>
    </div>
  );
}

export default PokeDex;
