//import { useTranslation } from "react-i18next";

function GameStatusTitle() {
  //const { t } = useTranslation();
  return (
    <div className="flex justify-center items-center ">
      <div className="flex flex-col items-center">
        <p className="status-timer">BET</p>
        <p className="draw-number">CLOSED</p>
      </div>
    </div>
  );
}

export default GameStatusTitle;
