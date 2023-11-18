import React, { useEffect } from "react";
import GameTitle from "./GameTitle";
import GameBoard from "./GameBoard";
import { signal } from "@preact/signals-react";

const winNumbers = signal<Array<number>>([]);
const data = Array.from({ length: 80 }, (_, index) => index + 1);
function GameDisplayLeft() {
  useEffect(() => {
    const intervalId = setInterval(() => {
      winNumbers.value = [
        ...winNumbers.value,
        Math.floor(Math.random() * 80) + 1,
      ];
      console.log(winNumbers);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full h-full col-span-7 flex flex-col gap-2 px-2 py-3">
      <GameTitle />
      <GameBoard data={data} winNumbers={winNumbers.value} />
    </div>
  );
}

export default GameDisplayLeft;
