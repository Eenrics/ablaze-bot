import GameHeaderLogo from "./GameHeaderLogo";
import { useTranslation } from "react-i18next";

function GameHeader() {
  const { i18n } = useTranslation();
  return (
    <div>
      <nav className=" grid grid-cols-10 py-7 w-full">
        <div className=" col-span-7 flex justify-start ml-3">
          <i
            onClick={() => {
              i18n.changeLanguage("am");
            }}
          >
            ablaze
          </i>
        </div>
        <GameHeaderLogo />
      </nav>
    </div>
  );
}

export default GameHeader;
