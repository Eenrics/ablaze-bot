import GameDisplay from "../../components/Game/GameDisplay";

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

  // console.log({ data });
  return (
    <div className=" w-full flex flex-col border-[2px] border-red-800/20">
      <GameDisplay />
      {/* <History /> */}
    </div>
  );
}

export default Game;
