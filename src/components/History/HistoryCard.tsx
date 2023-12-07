function HistoryCard(/*props: Props */) {
  return (
    <div className="flex items-center  border-white/10">
      <div className="flex flex-row">
        <div className="grid grid-cols-10 px-2 gap-[10px] ">
          {Array.from({ length: 20 }).map((_, i) => {
            const history = Math.floor(Math.random() * 80) + 1;
            return (
              <div
                key={i}
                className={`${
                  history > 40 ? "bg-[#ffa640]/100" : "bg-[#f6f640]/100"
                } rounded-full h-full p-1  aspect-square flex justify-center items-center`}
              >
                <div className="text-[4.0vw] text-black text-center font-semibold">
                  {history}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HistoryCard;
