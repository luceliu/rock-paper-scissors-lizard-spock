import { useGame } from "../contexts/GameContext";
import { getResultText } from "../utils/gameLogic";
import { Result as ResultType } from "../types/gameplay";
import { ChoiceEmoji } from "../constants/choices";

const Result: React.FC = () => {
  const { gameState } = useGame();
  const { result, playerChoice, computerChoice } = gameState;

  const resultText = getResultText(result, playerChoice, computerChoice);

  return (
    <div>
      <h2
        className={`mb-6 text-xl font-medium text-center ${
          result === ResultType.Win
            ? "text-green-600"
            : result === ResultType.Lose
            ? "text-red-600"
            : "text-indigo-600"
        }`}
      >
        {resultText}
      </h2>

      {playerChoice && computerChoice && (
        <div className="flex justify-center items-center mb-8 w-full">
          <div className="text-center mr-6">
            <div className="text-5xl mb-2">{ChoiceEmoji[playerChoice]}</div>
            <p className="text-sm text-gray-600">Your choice</p>
          </div>

          <div className="text-xl font-bold text-gray-500">vs</div>

          <div className="text-center ml-6">
            <div className="text-5xl mb-2">{ChoiceEmoji[computerChoice]}</div>
            <p className="text-sm text-gray-600">Computer's choice</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Result;
