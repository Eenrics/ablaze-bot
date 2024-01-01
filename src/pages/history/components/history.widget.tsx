export type DRAWTYPE = {
  draw: number[];
};
function HistoryWidget({ draw }: DRAWTYPE) {
  console.log({ draw });
  return (
    <div className="flex items-center  border-white/10">
      <div className="flex flex-row">
        <div className="grid grid-cols-10 px-2 gap-[10px] ">
          {Array.isArray(draw) &&
            draw.sort().map((lot: number, i: number) => {
              return (
                <div
                  key={i}
                  className={`${lot > 40 ? "bg-[#ffa640]/100" : "bg-[#f6f640]/100"
                    } rounded-full h-full p-1  aspect-square flex justify-center items-center`}
                >
                  <div className="text-[4.0vw] text-black text-center font-semibold">
                    {lot}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default HistoryWidget;
