import { useTranslation } from "react-i18next";

function GameStatusTitle() {
  const { t } = useTranslation();
  return (
    <div className="flex justify-between ">
      <div className="flex gap-4 ">
        <p className="status-title">{t("global.draw")}</p>
        <p className="draw-number">80210</p>
      </div>
    </div>
  );
}

export default GameStatusTitle;
