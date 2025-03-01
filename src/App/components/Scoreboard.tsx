import React from "react";

const Scoreboard: React.FC<{
  playerScore: number;
  computerScore: number;
}> = ({ playerScore = 5, computerScore = 2 }) => {
  return (
    <div className="flex justify-center w-full max-w-md mb-6">
      {/* <div className="scores"> */}
      <div className="bg-white shadow-md rounded-lg p-4 flex-1 mx-2 text-center">
        <h3 className="text-sm text-gray-600">You</h3>
        <p className="text-3xl font-bold text-indigo-600">{playerScore}</p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4 flex-1 mx-2 text-center">
        <h3 className="text-sm text-gray-600">Computer</h3>
        <div className="text-3xl font-bold text-indigo-600">
          {computerScore}
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Scoreboard;
