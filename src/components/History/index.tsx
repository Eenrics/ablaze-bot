// import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";
import HistoryCard from "./HistoryCard";
import Jackpot from "../Jackpot";
import WinnerDisplay from "../Game/GameDisplayRight/WinnerDisplay";
import JackpotDisplay from "../Game/GameDisplayLeft/JackpotDisplay";
import { useGetGamesHistory } from "../../services/Api/queres";
import { HISTORTYPE } from "../../types/index";
function History() {
  const { data, isLoading, isSuccess } = useGetGamesHistory();
  console.log({ history: data });
  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center">
          <div
            className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      ) : (
        <>
          {isSuccess && (
            <div className="grid ">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="w-full pl-2 flex flex-col justify-start mb-2 "
              >
                {data?.data?.map((win: HISTORTYPE, index: number) => {
                  return (
                    <>
                      {
                        <div className="gap-2 mb-2" key={index}>
                          <p className="ml-3 text-[3.7vw] font-bold text-white">
                            {win?.daily_id}
                          </p>
                          <HistoryCard draw={win?.draw} />
                        </div>
                      }
                    </>
                  );
                })}
              </motion.div>
              <JackpotDisplay />
              <Jackpot />
              <WinnerDisplay />
            </div>
          )}
        </>
      )}
    </>
  );
}

export default History;
