import { Outlet, ScrollRestoration } from "react-router-dom";
import GameHeader from "../../components/Game/GameHeader";
import GameStatusBox from "../../components/Game/GameDisplayLeft/GameSatusBox";
import JackpotDisplay from "../../components/Game/GameDisplayLeft/JackpotDisplay";
import { useGetCurrentGames } from "../../services/Api/queres";
import { DisplayType, display } from "../../utils/displayGameSignal";
import {
  GameEngineRouter,
  gameEngineRouter,
  gameId,
  selectedBalls,
} from "../../services/gameService";
import { setTimer, startTimer } from "../../services/timeCounterService";
import { DisplayRightType, displayRight } from "../../utils/displayRightSignal";
import { nextRoute } from "../../services/routeService";

export default function GameLayout() {
  const { data, isLoading, isSuccess } = useGetCurrentGames();
  console.log({ data });
  console.log({ isLoading });
  if (isSuccess) {
    const oldDate: Date = new Date();
    const newDateValue: string | undefined = data?.data?.currentGame?.end_time;
    gameId.value = data?.data?.currentGame?.daily_id;
    if (display.value === DisplayType.STAT) {
      selectedBalls.value = data?.data?.previousGame?.draw;
    }
    if (newDateValue) {
      const newDate: Date = new Date(newDateValue);
      const fg = newDate.getTime() - oldDate.getTime();
      if (gameEngineRouter.value === GameEngineRouter.GAME) {
        setTimer({
          days: 0,
          hours: 0,
          minutes: new Date(fg).getMinutes(),
          seconds: new Date(fg).getSeconds(),
        });

        display.value = DisplayType.STAT;
        displayRight.value = DisplayRightType.HITWIN;
        startTimer();
        nextRoute.value = "#setToLIVE";
      }
    }
  }

  return (
    <div className="game-layout w-full min-h-screen overflow-x-hidden bg-gradient-to-r from-[#950B01]  to-[#CE0F00]">
      <ScrollRestoration />
      <main className="min-h-full w-full">
        <GameHeader />
        {isLoading ? (
          <div className="flex items-center justify-center h-full w-full">
            <div
              className="inline-block h-12 w-12 mt-[40%] animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            />
          </div>
        ) : (
          <>
            <GameStatusBox />
            <JackpotDisplay />
            <Outlet />
          </>
        )}
        {/* <Jackpot /> */}
      </main>
    </div>
  );
}
