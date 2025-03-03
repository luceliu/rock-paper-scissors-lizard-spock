import { useGame } from "../contexts/GameContext";
import useModal from "../hooks/useModal";
import SettingsModal from "./SettingsModal";

const GameMenu: React.FC = () => {
  const { gameState, playNewRound } = useGame();
  const { result } = gameState;

  const { isOpen, openModal, closeModal } = useModal(false);

  return (
    <>
      <div className="flex gap-4">
        {result !== null && (
          <button
            onClick={playNewRound}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg shadow transition-colors cursor-pointer"
          >
            Play Again
          </button>
        )}

        <button
          onClick={openModal}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg shadow transition-colors cursor-pointer"
        >
          Settings
        </button>
      </div>

      <SettingsModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
};

export default GameMenu;
