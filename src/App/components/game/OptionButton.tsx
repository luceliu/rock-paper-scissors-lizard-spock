import { ChoiceEmoji } from "../../constants/choices";
import { Choice } from "../../types/gameplay";

interface OptionButtonProps {
  choice: Choice;
  onClick: (choice: Choice) => void;
  selected: boolean;
  disabled: boolean;
}

const OptionButton: React.FC<OptionButtonProps> = ({
  choice,
  onClick,
  selected,
  disabled,
}) => {
  return (
    <div className="relative flex flex-col items-center group">
      <button
        className={`w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center text-2xl
      transition-transform hover:scale-110 shadow-md
      ${selected ? "ring-4 ring-indigo-400" : ""}
      ${
        disabled && !selected
          ? "opacity-50 cursor-not-allowed"
          : "cursor-pointer"
      }
      `}
        onClick={() => onClick(choice)}
        disabled={disabled}
        aria-label={`Choose ${choice}`}
      >
        <span className="p-2 text-3xl">{ChoiceEmoji[choice]}</span>
      </button>
      <span className="absolute mt-18 md:mt-22 opacity-0 transition-opacity group-hover:opacity-100 text-sm text-gray-600">
        {choice}
      </span>
    </div>
  );
};

export default OptionButton;
