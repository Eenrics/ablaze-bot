import GameDisplay from "../../components/Game/GameDisplay";

import { useLocation, useNavigate } from "react-router-dom";
import { currentRoute } from "../../services/routeService";
import { useEffect, useState } from "react";
import { minutes, seconds } from "../../services/timeCounterService";
import { io } from "socket.io-client";
// interface GameProps {
//   isSocketConnected?:boolean
//   socket?:Socket
// }
const APP_URL = import.meta.env.VITE_API_URL;
const socket = io(APP_URL.split("game")[0]);

let reset = 0;
const resetGame = (isConnected: boolean) => {
  reset = setTimeout(
    () => {
      if (!isConnected) {
        clearTimeout(reset);
        window.location.href = location.pathname;
      }
    },
    minutes.value * 60 + seconds.value,
  );
};

const clearResetGame = () => {
  clearTimeout(reset);
};

function Game() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isConnected, setConnected] = useState(false);

  socket.on("connect", () => {
    setConnected((prevIsConnected) => !prevIsConnected);
    clearResetGame();
  });

  socket.on("disconnect", () => {
    setConnected((prevIsConnected) => !prevIsConnected);
    resetGame(isConnected);
  });

  useEffect(() => {
    if (!(location.pathname == currentRoute.value)) {
      navigate(currentRoute.value);
    }
  }, [currentRoute.value]);

  return (
    <div className=" w-full flex flex-col border-[2px] border-red-800/20">
      <GameDisplay />
      {/* <History /> */}
    </div>
  );
}

export default Game;
