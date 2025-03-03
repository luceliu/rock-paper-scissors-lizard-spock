import { useGame } from "../../contexts/GameContext";
import { Choice } from "../../types/gameplay";
import OptionButton from "./OptionButton";

const Options: React.FC = () => {
  const { gameState, makeChoice } = useGame();
  const choices = Object.values(Choice);
  const isRoundOver = gameState.result !== null;

  return (
    <div className="flex flex-wrap justify-center gap-6 mb-6">
      {choices.map((choice) => (
        <OptionButton
          key={choice}
          choice={choice}
          onClick={makeChoice}
          selected={gameState.playerChoice === choice}
          disabled={isRoundOver}
        />
      ))}
    </div>
  );
};

export default Options;
