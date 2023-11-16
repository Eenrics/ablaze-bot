function GameDisplayRight() {
  return (
    <div className="w-full h-full col-span-3 flex flex-col gap-3 ">
      <div className="flex gap-3 justify-end">
        <p className="bg-gradient-to-b from-[#ffe600] via-[#e0ce29ff]  to-[#383103ff] text-transparent bg-clip-text text-[3.4vw] moire not-italic">
          DRAW
        </p>
        <p className="bg-white text-transparent bg-clip-text text-[3.4vw] moire not-italic">
          80210
        </p>
      </div>

      <div className="flex flex-col w-full items-center">
        <p className=" bg-gradient-to-b text-[5vw] from-[#FFB700] to-[#B07F00]  text-transparent bg-clip-text moire">
          00:38
        </p>
      </div>

      <div className="flex flex-col items-center w-2/3 mx-auto">
        <p className="text-center goodtime font-light capitalize">
          <span className="text-[#EB0908]">20</span> balls drawn from{" "}
          <span className="text-[#EB0908]">80</span>
        </p>
      </div>
    </div>
  );
}

export default GameDisplayRight;
