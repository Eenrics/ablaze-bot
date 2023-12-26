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
        // window.location.reload();
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
  const [isConnected, setConnected] = useState(true);

  socket.on("connect", () => {
    // console.log("CONNECTED!!!!!");
    setConnected(true);
    clearResetGame();
  });

  // socket.once("connect",()=> window.location.reload())

  socket.on("disconnect", () => {
    setConnected(false);
    resetGame(isConnected);
  });

  useEffect(() => {
    if (!(location.pathname == currentRoute.value) && isConnected) {
      console.log("location :", location.pathname);
      console.log("currentroute :", currentRoute.value);

      // console.log("changing route...");
      // console.log("current connected state:",isConnected);

      navigate(currentRoute.value);
    }
    socket.on("connect", () => {
      // console.log("CONNECTED!!!!!");
      setConnected(true);
      clearResetGame();
    });
    socket.on("disconnect", () => {
      setConnected(false);
      resetGame(isConnected);
    });
  }, [currentRoute.value]);

  return (
    <div className=" w-full flex flex-col border-[2px] border-red-800/20">
      {!isConnected ? (
        <p style={{ backgroundColor: "#fff" }}>
          Please check your internet connection
        </p>
      ) : (
        ""
      )}
      {isConnected ? <GameDisplay /> : ""}
      {/* <GameDisplay /> */}
      {/* <History /> */}
    </div>
  );
}

export default Game;
