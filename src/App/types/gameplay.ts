export enum Choice {
  Rock = "Rock",
  Paper = "Paper",
  Scissors = "Scissors",
  Lizard = "Lizard",
  Spock = "Spock",
}

export enum Result {
  Win = "Win",
  Lose = "Lose",
  Tie = "Tie",
}

export interface GameState {
  // current round
  playerChoice: Choice | null;
  computerChoice: Choice | null;
  result: Result | null;
  // session stats
  playerScore: number;
  computerScore: number;
  history: RoundSummary[];

  // settings - if necessary, this can be pulled out into a new SettingsState
  username: string;
}

export interface RoundSummary {
  username: string; // associate a round with the username you played it with
  playerChoice: Choice;
  computerChoice: Choice;
  result: Result;
}
