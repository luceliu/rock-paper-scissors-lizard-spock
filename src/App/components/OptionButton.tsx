import { Choice } from "../types/gameplay";

interface OptionButtonProps {
  choice: Choice;
  onClick: (choice: Choice) => void;
  selected: boolean;
}

const OptionButton: React.FC<OptionButtonProps> = ({
  choice,
  onClick,
  selected,
}) => {
  return (
    <button
      className={`option-button ${selected ? "selected" : ""}`}
      onClick={() => onClick(choice)}
      aria-label={`Choose ${choice}`}
    >
      <span className="option-text">{choice}</span>
    </button>
  );
};

export default OptionButton;
