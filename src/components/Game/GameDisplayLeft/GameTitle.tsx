//import { useTranslation } from "react-i18next";

function GameTitle() {
  //const { t } = useTranslation();
  return (
    <div className="flex justify-end items-center py-[1px]">
      <div className="flex justify-center items-center  bg-[#f6f640]/100  uppercase rounded-[4px] text-[3.5vw] text-black font-semibold px-2 py-[1px]">
        HEADS
      </div>
    </div>
  );
}

export default GameTitle;
