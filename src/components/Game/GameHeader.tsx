import GameHeaderLogo from "./GameHeaderLogo";

function GameHeader() {
  return (
    <div>
      <nav className=" grid grid-cols-10 py-7 w-full">
        <div className=" col-span-7 flex justify-start ml-3">
          <i>ablaze</i>
        </div>
        <GameHeaderLogo />
      </nav>
    </div>
  );
}

export default GameHeader;
