"use client";

import { useState, useEffect } from "react";
import Modal from "./Modal";
import { useGame } from "../contexts/GameContext";

interface ISettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SettingsModal: React.FunctionComponent<ISettingsModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { gameState, setUsername, resetGame } = useGame();
  const [tempUsername, setTempUsername] = useState<string>(gameState.username);

  useEffect(() => {
    if (isOpen) {
      setTempUsername(gameState.username);
    }
  }, [isOpen, gameState.username]);

  const handleResetGame = () => {
    resetGame();
    onClose();
  };

  // Function to handle saving settings
  const handleSaveSettings = () => {
    // Update the actual username in the game context
    setUsername(tempUsername);
    onClose();
  };

  const settingsDescriptionId = "settings-description";
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Game Settings"
      ariaDescribedBy={settingsDescriptionId}
    >
      <div className="space-y-4">
        <p id={settingsDescriptionId} className="italic text-sm">
          Adjust game settings like your username.
        </p>
        <div className="flex flex-col items-start">
          <label htmlFor="username" className="font-medium text-gray-700 p-1">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={tempUsername}
            onChange={(e) => setTempUsername(e.target.value)}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Set your username"
          />
        </div>

        <div className="flex justify-between pt-4">
          <button
            onClick={handleResetGame}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Reset Game
          </button>
          <button
            onClick={handleSaveSettings}
            className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Save Settings
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default SettingsModal;
