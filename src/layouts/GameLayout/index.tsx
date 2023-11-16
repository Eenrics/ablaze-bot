import { Outlet, ScrollRestoration } from "react-router-dom";

export default function GameLayout() {
  return (
    <div className="game-layout">
      <ScrollRestoration />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
