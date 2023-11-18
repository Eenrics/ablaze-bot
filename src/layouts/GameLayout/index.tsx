import { Outlet, ScrollRestoration } from "react-router-dom";
import GameBGPattern from "../../components/Game/GameBGPattern";
import GameHeader from "../../components/Game/GameHeader";

export default function GameLayout() {
  return (
    <div className="game-layout h-full w-full">
      <ScrollRestoration />
      <GameBGPattern />

      <main className="h-full w-full">
        <GameHeader />
        <Outlet />
      </main>
    </div>
  );
}
