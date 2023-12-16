// import { useTranslation } from "react-i18next";

import Jackpot from "../Jackpot";
import WinnerDisplay from "../Game/GameDisplayRight/WinnerDisplay";
import JackpotDisplay from "../Game/GameDisplayLeft/JackpotDisplay";
import { HISTORTYPE } from "../../types/index";

import axios from "axios";
import { useEffect, useState } from "react";
import AllHistory from "./AllHistory";

function History() {
  const [historyData, setHistoryData] = useState<HISTORTYPE[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const APP_URL = import.meta.env.VITE_API_URL;

  const getHistoryData = async () => {
    setIsLoading(true);
    const response = await axios.get(APP_URL + "get-games");
    if (response.status === 200) {
      setHistoryData(response?.data);
      setIsLoading(false);
    } else {
      console.log({ response });
    }
  };
  useEffect(() => {
    getHistoryData();
  }, []);

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
          {
            <div className="grid ">
              <div className="w-full pl-2 flex flex-col justify-start mb-2 ">
                <AllHistory data={historyData} />
              </div>
              <JackpotDisplay />
              <Jackpot />
              <WinnerDisplay />
            </div>
          }
        </>
      )}
    </>
  );
}

export default History;
