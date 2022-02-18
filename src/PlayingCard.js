import React from "react";
import backOfCard from "./back.png";
import {useFlipCard} from "./hooks"
import "./PlayingCard.css"

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const flippedCard = useFlipCard(false);
  const [state,flip] = flippedCard;
  
  return (
    <img
      src={state ? front : back}
      alt="playing card"
      onClick={flip}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
