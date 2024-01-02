import { Outlet, ScrollRestoration } from "react-router-dom";
import GameHeader from "../../components/Game/GameHeader";

export default function GameIntoLayout() {
  return (
    <div className={`game-intro-layout w-full overflow-hidden  `}>
      <ScrollRestoration />

      <main
        className={`h-[100vh] w-full relative bg-[url('/assets/bgIntroPage.png')]`}
      >
        <div className=" absolute z-10">
          <GameHeader />
        </div>
        <Outlet />
      </main>
    </div>
  );
}
