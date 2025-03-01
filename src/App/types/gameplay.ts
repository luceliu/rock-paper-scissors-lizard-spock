// export type Choice = "rock" | "paper" | "scissors" | "lizard" | "spock";
// export type Result = "win" | "lose" | "tie";

export enum Choice {
  Rock = "rock",
  Paper = "paper",
  Scissors = "scissors",
  Lizard = "lizard",
  Spock = "spock",
}

export enum Result {
  Win = "win",
  Lose = "lose",
  Tie = "tie",
}

export interface GameState {
  playerChoice: Choice | null;
  computerChoice: Choice | null;
  result: Result | null;
  playerScore: number;
  computerScore: number;
  history: RoundSummary[];
}

export interface RoundSummary {
  playerChoice: Choice;
  computerChoice: Choice;
  result: Result;
}
