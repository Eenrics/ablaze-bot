import { BETPAYOUTTABLE, PAYOUTINDEX } from "../../../../data/data.source";

function PayoutTable() {

  return (
    <>
      <div className="flex flex-col items-center w-2/3 mx-auto">
        <p className="text-center font-extrabold text-white text-[4.8vw] uppercase">
          <span className="text-[#FFE600] micro">20</span> balls drawn from{" "}
          <span className="text-[#FFE600] micro">80</span>
        </p>
      </div>
      <div className="flex flex-col items-center w-5/6 mx-auto">
        <div className="w-full mx-2 flex flex-col gap-2">
          <div className="grid grid-cols-2 w-full">
            <h4 className="text-[#FFB800] font-extrabold text-center text-[5vw] ">
              HIT
            </h4>
            <h4 className="text-[#FFB800] font-extrabold text-center text-[5vw]">
              WIN
            </h4>
          </div>

          {BETPAYOUTTABLE[PAYOUTINDEX.init]
            .sort((a, b) => b.num - a.num)
            .map((hitWin, index) => {
              return (
                <div className="grid grid-cols-2 w-full" key={index}>
                  <h4 className="text-[#FFFFFF] font-extrabold text-center text-[4vw]">
                    {hitWin.num}
                  </h4>
                  <h4 className="text-[#FFFFFF] font-extrabold text-center text-[4vw]">
                    {hitWin.odd}
                  </h4>
                </div>
                //   <HitWin hit={`${hitWin.num}`} win={`${hitWin.odd}`} key={index} />
              );
            })}
        </div>
      </div>
    </>
  );
}

export default PayoutTable;
