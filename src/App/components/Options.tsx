import React from "react";
import { Choice } from "../types/gameplay";
import OptionButton from "./OptionButton";

const Options: React.FC = () => {
  const choices: Choice[] = ["rock", "paper", "scissors", "lizard", "spock"];

  return (
    <div className="options-container">
      {choices.map((choice) => (
        <OptionButton
          key={choice}
          choice={choice}
          onClick={() => console.log("OptionButton clicked")}
          selected={true}
          //   onClick={makeChoice}
          //   selected={gameState.playerChoice === choice}
        />
      ))}
    </div>
  );
};

export default Options;
