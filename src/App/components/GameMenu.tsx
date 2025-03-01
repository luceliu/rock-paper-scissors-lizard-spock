import * as React from "react";
import { Result } from "../types/gameplay";

interface IGameMenuProps {
  result: Result;
}

const GameMenu: React.FunctionComponent<IGameMenuProps> = ({ result }) => {
  return (
    <div className="flex gap-4">
      {result !== null && (
        <button
          // onClick={resetGame}
          onClick={() => console.log("Play again")}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg shadow transition-colors"
        >
          Play Again
        </button>
      )}

      <button
        //   onClick={resetScores}
        onClick={() => console.log("Reset Scores")}
        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg shadow transition-colors"
      >
        Reset Scores
      </button>
    </div>
  );
};

export default GameMenu;
