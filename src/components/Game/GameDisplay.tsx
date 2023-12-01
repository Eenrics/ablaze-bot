import GameDisplayLeft from "./GameDisplayLeft";
// import GameStatusBox from "./GameDisplayLeft/GameSatusBox";
// import JackpotDisplay from "./GameDisplayLeft/JackpotDisplay";
import GameDisplayRight from "./GameDisplayRight";
//import GameDisplayStatTimer from "./GameDisplayRight/GameDisplayStatTimer";

function GameDisplay() {
  return (
    <>
      <GameDisplayLeft />
      <GameDisplayRight />
    </>
  );
}

export default GameDisplay;
