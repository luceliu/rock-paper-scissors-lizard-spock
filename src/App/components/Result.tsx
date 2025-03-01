import { useGame } from "../contexts/GameContext";
import { getResultText } from "../utils/gameLogic";

const Result: React.FC = () => {
  const { gameState } = useGame();
  const { result, playerChoice, computerChoice } = gameState;

  if (result === null) return null;

  const resultText = getResultText(result, playerChoice, computerChoice);

  return (
    <div>
      <h2>{resultText}</h2>

      {playerChoice && computerChoice && (
        <div className="choices-display">
          <div className="choice-box">
            <h3>You chose</h3>
            <div className="choice-icon">{playerChoice}</div>
          </div>

          <div className="choice-box">
            <h3>Computer chose</h3>
            <div className="choice-icon">{computerChoice}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Result;
