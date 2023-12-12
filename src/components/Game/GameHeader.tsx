function GameHeader() {
  return (
    <div>
      <nav className=" flex justify-between py-4 mb-4 w-[100vw] h-[3vh]">
        <div className=" ml-7 object-cover">
          <img src="/assets/Logo.svg" className="w-[5vh] h-[5vh]" alt="" />
        </div>
        <div className="w-[30vw] ">
          <img
            src="/assets/KENO.png"
            className="object-cover  h-[4vh] "
            alt=""
          />
        </div>
      </nav>
    </div>
  );
}

export default GameHeader;
