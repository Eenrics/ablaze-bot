import GameHeaderLogo from "./GameHeaderLogo";

function GameHeader() {
  return (
    <div>
      <nav className=" grid grid-cols-10 py-4 w-full h-[10vh]">
        <div className=" col-span-7 flex justify-start gap-3 ml-3">
          <img src="/assets/logo.svg" className="w-[50px]" alt="" />
        </div>
        <GameHeaderLogo />
      </nav>
    </div>
  );
}

export default GameHeader;
