import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Choice, GameState, Result } from "../types/gameplay";
import { determineWinner, getComputerChoice } from "../utils/gameLogic";

interface GameContextProps {
  gameState: GameState;
  makeChoice: (choice: Choice) => void;
  resetGame: () => void;
  playNewRound: () => void;
  setUsername: (newUsername: string) => void;
}

const initialState: GameState = {
  playerChoice: null,
  computerChoice: null,
  result: null,
  playerScore: 0,
  computerScore: 0,
  username: "",
  history: [],
};

// Storage key for localStorage
const STORAGE_KEY = "rock-paper-scissors-lizard-spock-game-state";

const loadGameState = (): GameState => {
  try {
    const savedState = localStorage.getItem(STORAGE_KEY);
    if (savedState) {
      return JSON.parse(savedState);
    }
  } catch (error) {
    console.error("Failed to load game state from localStorage:", error);
  }
  return initialState;
};

const saveGameState = (state: GameState): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error("Failed to save game state to localStorage:", error);
  }
};

const GameContext = createContext<GameContextProps | undefined>(undefined);

export const GameProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // Load initial state from localStorage or use the default initialState
  const [gameState, setGameState] = useState<GameState>(loadGameState);

  useEffect(() => {
    saveGameState(gameState);
  }, [gameState]); // save gameState whenever it changes to localStorage

  const makeChoice = (choice: Choice) => {
    const computerChoice = getComputerChoice();
    const result = determineWinner(choice, computerChoice);

    setGameState((prevState) => {
      // Calculate new scores
      const playerScore =
        prevState.playerScore + (result === Result.Win ? 1 : 0);
      const computerScore =
        prevState.computerScore + (result === Result.Lose ? 1 : 0);
      const username = prevState.username;

      // Add to history if there's a valid result
      const history = [...prevState.history];
      if (result !== null) {
        history.push({
          username,
          playerChoice: choice,
          computerChoice,
          result,
        });
      }

      return {
        ...prevState,
        playerChoice: choice,
        computerChoice,
        result,
        playerScore,
        computerScore,
        // username,
        history,
      };
    });
  };

  const resetGame = () => {
    setGameState(initialState);
    localStorage.removeItem(STORAGE_KEY);
  };

  const playNewRound = () => {
    setGameState((prevState) => {
      return {
        ...prevState,
        playerChoice: null,
        computerChoice: null,
        result: null,
      };
    });
  };

  const setUsername = (newUsername: string) => {
    setGameState((prevState) => {
      return {
        ...prevState,
        username: newUsername,
      };
    });
  };

  return (
    <GameContext.Provider
      value={{ gameState, makeChoice, resetGame, playNewRound, setUsername }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = (): GameContextProps => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
};
