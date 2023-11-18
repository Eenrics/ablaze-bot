interface Props {
  gameId: string;
}
function HistoryCard(props: Props) {
  const { gameId } = props;
  return (
    <div className="flex items-center justify-center gap-[1vw] w-full border-y-[1px] border-white/10">
      <p className="text-[4vw] font-bold">{gameId}</p>
      <div className="flex flex-row">
        <div className="grid grid-cols-[repeat(20,_minmax(0,_1fr))] gap-2 mr-2">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className={`${
                i > 10 ? "bg-[#ffa640]/100" : "bg-[#f6f640]/100"
              } rounded-full h-full aspect-square flex flex-col justify-center items-center`}
            >
              <p className="text-[2.6vw] text-black text-center font-semibold">
                {Math.floor(Math.random() * 80) + 1}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HistoryCard;
