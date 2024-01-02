import { useEffect } from "react";
import History from "../../components/History";
//import Jackpot from "../../components/Jackpot";
import { currentRoute } from "../../services/routeService";
import { useLocation, useNavigate } from "react-router-dom";
//import JackpotDisplay from "../../components/Game/GameDisplayLeft/JackpotDisplay";

function HistoryPage() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!(location.pathname == currentRoute.value))
      navigate(currentRoute.value);
  }, [currentRoute.value]);

  return (
    <div className="mt-2">
      <History />
      {/* <JackpotDisplay/> */}
    </div>
  );
}

export default HistoryPage;
