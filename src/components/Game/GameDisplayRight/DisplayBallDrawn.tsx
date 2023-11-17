import { useTranslation } from "react-i18next";

function DisplayBallDrawn() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center w-2/3 mx-auto">
      <p className="text-center goodtime font-light text-[5vw] capitalize">
        <span className="text-[#EB0908]">20</span> {t("game.balls_drawn_from")}{" "}
        <span className="text-[#EB0908]">80</span>
      </p>
    </div>
  );
}

export default DisplayBallDrawn;
