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
  selectedNewBalls,
} from "../../services/gameService";
import {
  minutes,
  seconds,
  setTimer,
  startTimer,
} from "../../services/timeCounterService";
import { DisplayRightType, displayRight } from "../../utils/displayRightSignal";
import { nextRoute } from "../../services/routeService";
import { useEffect } from "react";
import axios from "axios";
import { signal } from "@preact/signals-react";
import { io } from "socket.io-client";
import { getServerTime, setServerTime } from "../../services/serverTime";

export default function GameLayout() {
  const { data, isLoading, isSuccess } = useGetCurrentGames();
  const enable = signal(false);
  const APP_URL = import.meta.env.VITE_API_URL;

  const socket = io(APP_URL);

  socket.on("timeSync", (val) => {
    if (val?.now) setServerTime(val?.now);
  });

  const GetNewGame = async () => {
    const response = await axios.get(
      APP_URL + "get-daily-game/" + gameId.value,
    );
    console.log({ response });
    if (response.status === 200) {
      if (selectedNewBalls.value.length === 0) {
        selectedNewBalls.value = response?.data?.draw || [];
      }
    }
  };

  useEffect(() => {
    if (minutes.value === 0 && seconds.value === 10) {
      if (enable.value === false) {
        console.log("calling get new game");
        GetNewGame();
      } else {
        enable.value = true;
      }
      console.log("fg");
    }
  }, [seconds.value]);

  if (isSuccess) {
    const oldDate: Date = getServerTime();
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
          minutes:
            new Date(fg).getMinutes() < 10
              ? new Date(fg).getMinutes() > 0
                ? new Date(fg).getMinutes()
                : 0
              : new Date(fg).getMinutes() - 57,
          seconds:
            new Date(fg).getSeconds() > 0 ? new Date(fg).getSeconds() : 0,
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
