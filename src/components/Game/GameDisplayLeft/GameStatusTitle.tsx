import { useTranslation } from "react-i18next";

function GameStatusTitle() {
  const { t } = useTranslation();
  return (
    <div className="flex justify-between items-center ">
      <p className="status-title pr-1">{t("global.draw")}</p>
      <p className="draw-number">80210</p>
    </div>
  );
}

export default GameStatusTitle;
