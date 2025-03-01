import React from "react";
import { Choice } from "../types/gameplay";

const Result: React.FC<{ playerChoice: Choice; computerChoice: Choice }> = ({
  playerChoice = "scissors",
  computerChoice = "paper",
}) => {
  return (
    <div>
      <h2>You lose!</h2>

      {playerChoice && computerChoice && (
        <div className="choices-display">
          <div className="choice-box">
            <h3>You chose</h3>
            <div className="choice-icon">{playerChoice}</div>
          </div>

          <div className="choice-box">
            <h3>Computer chose</h3>
            <div className="choice-icon">{computerChoice}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Result;
