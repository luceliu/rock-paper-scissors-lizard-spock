import { Choice, Result } from "../types/gameplay";

const choices: Choice[] = ["rock", "paper", "scissors", "lizard", "spock"];

// Generate computer choice
export const getComputerChoice = (): Choice => {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

// Determine game result based on choices
export const determineWinner = (
  playerChoice: Choice,
  computerChoice: Choice
): Result => {
  if (playerChoice === computerChoice) {
    return "tie";
  }

  // Define winning conditions for each choice
  const winConditions: Record<Choice, Choice[]> = {
    scissors: ["paper", "lizard"],
    paper: ["rock", "spock"],
    rock: ["scissors", "lizard"],
    lizard: ["paper", "spock"],
    spock: ["scissors", "rock"],
  };

  return winConditions[playerChoice].includes(computerChoice) ? "win" : "lose";
};

// Get descriptive text for the result
export const getResultText = (
  result: Result,
  playerChoice: Choice | null,
  computerChoice: Choice | null
): string => {
  if (!playerChoice || !computerChoice || result === null) {
    return "Make your choice!";
  }

  switch (result) {
    case "win":
      return `You win! ${playerChoice} beats ${computerChoice}`;
    case "lose":
      return `You lose! ${computerChoice} beats ${playerChoice}`;
    case "tie":
      return `It's a tie! Both chose ${playerChoice}`;
    default:
      return "";
  }
};
