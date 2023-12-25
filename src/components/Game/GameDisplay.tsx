import GameDisplayLeft from "./GameDisplayLeft";
import GameDisplayRight from "./GameDisplayRight";
function GameDisplay() {
  // console.log({ isLoading });
  return (
    <div>
      <>
        <GameDisplayLeft />
        <GameDisplayRight />
      </>
    </div>
  );
}

export default GameDisplay;
