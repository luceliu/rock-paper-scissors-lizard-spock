import { Choice } from "../types/gameplay";

export const ChoiceEmoji: Record<Choice, string> = {
  [Choice.Rock]: "👊",
  [Choice.Paper]: "✋",
  [Choice.Scissors]: "✌️",
  [Choice.Lizard]: "🦎",
  [Choice.Spock]: "🖖",
};

export const ChoiceDisplayName: Record<Choice, string> = {
  [Choice.Rock]: "Rock",
  [Choice.Paper]: "Paper",
  [Choice.Scissors]: "Scissors",
  [Choice.Lizard]: "Lizard",
  [Choice.Spock]: "Spock",
};
