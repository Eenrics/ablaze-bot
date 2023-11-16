import React from "react";
import GameTitle from "./GameTitle";
import GameBoard from "./GameBoard";

const winNumbers = [1, 2, 3, 4, 80, 30, 53, 5, 26];
const data = Array.from({ length: 80 }, (_, index) => index + 1);
function GameDisplayLeft() {
  return (
    <div className="w-full h-full col-span-7 flex flex-col gap-2 px-2">
      <GameTitle />
      <GameBoard data={data} winNumbers={winNumbers} />
    </div>
  );
}

export default GameDisplayLeft;
