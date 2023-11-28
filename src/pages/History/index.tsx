import History from "../../components/History";
import Jackpot from "../../components/Jackpot";
import { currentRoute } from "../../services/routeService";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function HistoryPage() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!(location.pathname == currentRoute.value))
      navigate(currentRoute.value);
  }, [currentRoute.value]);

  return (
    <>
      <div>
        <History />
      </div>
      <Jackpot />
    </>
  );
}

export default HistoryPage;
