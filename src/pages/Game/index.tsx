import GameDisplay from "../../components/Game/GameDisplay";
import Jackpot from "../../components/Jackpot";
// import History from "../../components/History";
import { useLocation, useNavigate } from "react-router-dom";
import { currentRoute } from "../../services/routeService";
import { useEffect } from "react";

function Game() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!(location.pathname == currentRoute.value))
      navigate(currentRoute.value);
  }, [currentRoute.value]);

  return (
    <div className="h-[90vh]">
      <GameDisplay />
      <Jackpot />
      {/* <History /> */}
    </div>
  );
}

export default Game;
