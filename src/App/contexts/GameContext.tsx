import { createContext, useContext, useState, ReactNode } from "react";
import { Choice, GameState } from "../types/gameplay";
import { determineWinner, getComputerChoice } from "../utils/gameLogic";

interface GameContextProps {
  gameState: GameState;
  makeChoice: (choice: Choice) => void;
  resetGame: () => void;
  playNewRound: () => void;
}

const initialState: GameState = {
  playerChoice: null,
  computerChoice: null,
  result: null,
  playerScore: 0,
  computerScore: 0,
  history: [],
};

const GameContext = createContext<GameContextProps | undefined>(undefined);

export const GameProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [gameState, setGameState] = useState<GameState>(initialState);

  const makeChoice = (choice: Choice) => {
    const computerChoice = getComputerChoice();
    const result = determineWinner(choice, computerChoice);

    setGameState((prevState) => {
      // Calculate new scores
      const playerScore = prevState.playerScore + (result === "win" ? 1 : 0);
      const computerScore =
        prevState.computerScore + (result === "lose" ? 1 : 0);

      // Add to history if there's a valid result
      const history = [...prevState.history];
      if (result !== null) {
        history.push({
          playerChoice: choice,
          computerChoice,
          result,
        });
      }

      return {
        playerChoice: choice,
        computerChoice,
        result,
        playerScore,
        computerScore,
        history,
      };
    });
  };

  const resetGame = () => {
    setGameState(initialState);
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

  return (
    <GameContext.Provider
      value={{ gameState, makeChoice, resetGame, playNewRound }}
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
