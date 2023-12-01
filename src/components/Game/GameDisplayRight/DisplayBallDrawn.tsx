import { useTranslation } from "react-i18next";

function DisplayBallDrawn() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center w-2/3 mx-auto">
      <p className="text-center font-extrabold text-[4.8vw] uppercase">
        <span className="text-[#FFE600] micro">20</span>{" "}
        {t("game.balls_drawn_from")}{" "}
        <span className="text-[#FFE600] micro">80</span>
      </p>
    </div>
  );
}

export default DisplayBallDrawn;
