import GameHeaderLogo from "./GameHeaderLogo";

function GameHeader() {
  return (
    <div>
      <nav className=" grid grid-cols-10 py-4 mb-4 w-full h-[3vh]">
        <div className=" col-span-7 flex justify-start gap-3 ml-7 object-cover">
          <img src="/assets/logo.svg" className="w-[5vh] h-[5vh]" alt="" />
        </div>
        <GameHeaderLogo />
      </nav>
    </div>
  );
}

export default GameHeader;
