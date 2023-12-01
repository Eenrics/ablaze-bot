//import { useTranslation } from "react-i18next";

function GameTitle() {
  //const { t } = useTranslation();
  return (
    <div className="flex justify-between ">
      <div className="flex gap-3">
        {/* <p className="bg-gradient-to-b from-[#ffe600] via-[#a89916]  to-[#0c0b00] text-transparent bg-clip-text text-[3.4vw] moire not-italic">
          {t("global.draw")}
        </p>
        <p className="bg-white text-transparent bg-clip-text text-[3.4vw] moire not-italic">
          80210
        </p> */}
      </div>
      <div className="flex justify-center bg-[#f6f640]/100  uppercase rounded-[4px] text-[5.5vw] text-black font-semibold tail-width">
        HEADS
      </div>
    </div>
  );
}

export default GameTitle;
