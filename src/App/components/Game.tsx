import React from "react";
import Options from "./Options";
import Result from "./Result";
import Scoreboard from "./Scoreboard";
import GameMenu from "./GameMenu";

const Game: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-2 text-indigo-800">
        Rock Paper Scissors Lizard Spock
      </h1>
      <Scoreboard playerScore={6} computerScore={3} />
      <Result playerChoice={"scissors"} computerChoice={"paper"} />
      <Options />
      <GameMenu result={"win"} />
    </div>
  );
};

export default Game;
