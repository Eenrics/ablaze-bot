import { Outlet, ScrollRestoration } from "react-router-dom";
import GameBGPattern from "../../components/Game/GameBGPattern";
import GameHeader from "../../components/Game/GameHeader";
import GameStatusBox from "../../components/Game/GameDisplayLeft/GameSatusBox";
import JackpotDisplay from "../../components/Game/GameDisplayLeft/JackpotDisplay";
// import Jackpot from "../../components/Jackpot";

export default function GameLayout() {
  return (
    <div className="game-layout  w-full overflow-hidden">
      <ScrollRestoration />
      <GameBGPattern />

      <main className="h-full w-full">
        <GameHeader />
        <GameStatusBox />
        <JackpotDisplay />
        <Outlet />
        {/* <Jackpot /> */}
      </main>
    </div>
  );
}
