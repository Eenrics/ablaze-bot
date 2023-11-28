import { useTranslation } from "react-i18next";

function GameStatusTitle() {
  const { t } = useTranslation();
  return (
    <div className="flex justify-between ">
      <div className="flex gap-1">
        <p className="bg-gradient-to-b from-[#ffe600] via-[#a89916]  to-[#0c0b00] text-transparent bg-clip-text text-[8vw] moire not-italic">
          {t("global.draw")}
        </p>
        <p className="bg-white text-transparent bg-clip-text text-[8vw] moire not-italic">
          80210
        </p>
      </div>
    </div>
  );
}

export default GameStatusTitle;
