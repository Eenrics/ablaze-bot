import { useTranslation } from "react-i18next";
import { gameId } from "../../../services/gameService";

function GameStatusTitle() {
  const { t } = useTranslation();
  return (
    <div className="flex justify-between items-center ">
      <p className="status-title pr-1">{t("global.draw")}</p>
      <p className="draw-number">{gameId.value}</p>
    </div>
  );
}

export default GameStatusTitle;
