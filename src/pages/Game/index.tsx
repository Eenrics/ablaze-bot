import GameDisplay from "../../components/Game/GameDisplay";
//import Jackpot from "../../components/Jackpot";
// import History from "../../components/History";
import { useLocation, useNavigate } from "react-router-dom";
import { currentRoute } from "../../services/routeService";
import { useEffect } from "react";
//import GameStatusBox from "../../components/Game/GameDisplayLeft/GameSatusBox";
//import JackpotDisplay from "../../components/Game/GameDisplayLeft/JackpotDisplay";

function Game() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!(location.pathname == currentRoute.value))
      navigate(currentRoute.value);
  }, [currentRoute.value]);

  return (
    <div className="h-[90vh] w-full flex flex-col border-[2px] border-red-800/20">
      <GameDisplay />

      {/* <History /> */}
    </div>
  );
}

export default Game;
