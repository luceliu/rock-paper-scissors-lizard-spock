import { useGame } from "../contexts/GameContext";

const GameMenu: React.FC = () => {
  const { gameState, resetGame, playNewRound } = useGame();
  const { result } = gameState;

  return (
    <div className="flex gap-4">
      {result !== null && (
        <button
          onClick={playNewRound}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg shadow transition-colors"
        >
          Play Again
        </button>
      )}

      <button
        onClick={resetGame}
        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg shadow transition-colors"
      >
        Reset Scores
      </button>
    </div>
  );
};

export default GameMenu;
