// import { DisplayType, display } from "../../utils/displayGameSignal";
// import JackpotTImer from "../Game/GameDisplayRight/JackpotTImer";

function Jackpot() {
  return (
    <div className="w-full flex flex-col gap-0 items-center justify-center my-8">
      {/* <FancyFont text="Jackpot" fontSize="12" /> */}
      <p className="bg-gradient-to-b from-[#ffe600] via-[#e0ce29ff]  to-[#383103ff] text-transparent bg-clip-text text-[8vw] moire not-italic relative after:text-white after:content-['Jackpot'] after:absolute after:left-[1px] after:-z-10 before:text-black before:content-['Jackpot'] before:absolute before:top-[4px] before:blur-sm before:-z-10">
        Jackpot
      </p>

      {/* <JackpotTImer /> */}
    </div>
  );
}

export default Jackpot;
