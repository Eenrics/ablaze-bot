import React from "react";
import { useTranslation } from "react-i18next";

function GameTitle() {
  const { t } = useTranslation();
  return (
    <div className="flex gap-3">
      <p className="bg-gradient-to-b from-[#ffe600] via-[#e0ce29ff]  to-[#383103ff] text-transparent bg-clip-text text-[3.4vw] moire not-italic">
        {t("global.draw")}
      </p>
      <p className="bg-white text-transparent bg-clip-text text-[3.4vw] moire not-italic">
        80210
      </p>
    </div>
  );
}

export default GameTitle;
