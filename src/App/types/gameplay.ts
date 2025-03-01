export type Choice = "rock" | "paper" | "scissors" | "lizard" | "spock";
export type Result = "win" | "lose" | "tie";

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
