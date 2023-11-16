function GameHeader() {
  return (
    <div>
      <nav className="flex justify-between py-7 px-3">
        <i>Ablaze</i>
        <i>
          {/* <FancyFont text="KENO" fontSize="7.5" /> */}
          <p className="bg-gradient-to-b from-[#ffe600] via-[#e0ce29ff]  to-[#383103ff] text-transparent relative bg-clip-text text-[7.5vw] moire not-italic after:text-white after:content-['KENO'] after:absolute after:left-[1px] after:-z-10 before:text-black before:content-['KENO'] before:absolute before:top-[4px] before:blur-sm before:-z-10">
            KENO
          </p>
        </i>
      </nav>
    </div>
  );
}

export default GameHeader;
