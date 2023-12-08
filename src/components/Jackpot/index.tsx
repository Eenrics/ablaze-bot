function Jackpot() {
  return (
    <div className="flex justify-center items-center relative ">
      <img
        src="/assets/Jackpotwin.png"
        alt="Jackpot Background"
        className="max-w-full h-[22vh]"
        onError={(e) => console.error("Image failed to load", e)}
      />
      <span className="jackpot-win">100,000ETB</span>
    </div>
  );
}

export default Jackpot;
