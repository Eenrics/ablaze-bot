function GameBGPattern() {
  return (
    <div className="absolute w-full h-full grid grid-cols-10 -z-10">
      <div className="h-full col-span-7 bg-gradient-to-r from-[#780503]  to-[#F63308]" />
      <div className="h-full col-span-3 bg-gradient-to-b from-[#961E01]  to-[#1d0101]" />
    </div>
  );
}

export default GameBGPattern;
