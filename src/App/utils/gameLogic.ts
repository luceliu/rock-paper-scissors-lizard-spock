import { Choice, Result } from "../types/gameplay";

// const choices: Choice[] = ["rock", "paper", "scissors", "lizard", "spock"];
const choices = Object.values(Choice);

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
    return Result.Tie;
  }

  // Define winning conditions for each choice
  const winConditions: Record<Choice, Choice[]> = {
    [Choice.Scissors]: [Choice.Paper, Choice.Lizard],
    [Choice.Paper]: [Choice.Rock, Choice.Spock],
    [Choice.Rock]: [Choice.Scissors, Choice.Lizard],
    [Choice.Lizard]: [Choice.Paper, Choice.Spock],
    [Choice.Spock]: [Choice.Scissors, Choice.Rock],
  };

  return winConditions[playerChoice].includes(computerChoice)
    ? Result.Win
    : Result.Lose;
};

// Get descriptive text for the result
export const getResultText = (
  result: Result | null,
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
