function Jackpot() {
  return (
    <div className="w-full flex flex-col gap-0 items-center justify-center ">
      <div className="flex justify-center items-center relative">
        <img
          src="/assets/Jackpotwin.png"
          alt="Jackpot Background"
          className="max-w-full h-auto"
          onError={(e) => console.error("Image failed to load", e)}
        />
        <span className="jackpot-win">100,000ETB</span>
      </div>
    </div>
  );
}

export default Jackpot;
