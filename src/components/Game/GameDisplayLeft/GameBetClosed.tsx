//import { useTranslation } from "react-i18next";

function GameStatusTitle() {
  //const { t } = useTranslation();
  return (
    <div className="flex justify-center items-center ">
      <div className="flex flex-col items-center">
        <p className="bg-gradient-to-b from-[#ffe600] via-[#a89916]  to-[#0c0b00] text-transparent bg-clip-text text-[8vw] moire not-italic">
          BET
        </p>
        <p className="bg-white text-transparent bg-clip-text text-[8vw] moire not-italic">
          CLOSED
        </p>
      </div>
    </div>
  );
}

export default GameStatusTitle;
