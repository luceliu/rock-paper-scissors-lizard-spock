import { Choice } from "../types/gameplay";
import OptionButton from "./OptionButton";
import { useGame } from "../contexts/GameContext";

const Options: React.FC = () => {
  const { gameState, makeChoice } = useGame();
  // const choices: Choice[] = ["rock", "paper", "scissors", "lizard", "spock"];
  const choices = Object.values(Choice);

  return (
    <div className="options-container">
      {choices.map((choice) => (
        <OptionButton
          key={choice}
          choice={choice}
          onClick={makeChoice}
          selected={gameState.playerChoice === choice}
        />
      ))}
    </div>
  );
};

export default Options;
