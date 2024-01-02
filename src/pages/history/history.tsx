import React from "react";
import HistoryWidget, { DRAWTYPE } from "./components/history.widget";
import AdsBanner from "../../components/ads-banner/ads.banner";
import MainHeader from "../../components/header/main.header";
import { DisplayToShow, GameHistory, historyDataAtom } from "../../data/data.source";
import { useAtom } from "jotai";
import BetClosed from "../draw-display/components/game-header/bet.closed";

function History() {
  const [, setNextDisplay] = useAtom(DisplayToShow);
  setTimeout(() => {
    setNextDisplay(() => (DisplayToShow.init = "Display"));

  },4000);
  GameHistory();
  const [lots] = useAtom(historyDataAtom);
  return (

    <div className="game-layout w-full min-h-screen overflow-x-hidden bg-gradient-to-r from-[#950B01]  to-[#CE0F00]">
      <MainHeader />
 <BetClosed/>
      {/* <GameStatusBox /> */}
      <AdsBanner />
      <div className="mt-2">
        <div className="grid ">
          <div className="w-full pl-2 flex flex-col justify-start mb-2 ">
            <div className="gap-2 mb-2" key={lots[0]?.daily_id}>
              <p className="ml-3 text-[3.7vw] font-bold text-white">{lots[0]?.daily_id}</p>
              <HistoryWidget draw={lots[0]?.draw.sort((a,b) => a-b) as any} />
            </div>
            <div className="gap-2 mb-2" key={lots[1]?.daily_id}>
              <p className="ml-3 text-[3.7vw] font-bold text-white">{lots[1]?.daily_id}</p>
              <HistoryWidget draw={lots[1]?.draw.sort((a,b) => a-b)  as any} />
            </div>
            <div className="gap-2 mb-2" key={lots[2]?.daily_id}>
              <p className="ml-3 text-[3.7vw] font-bold text-white">{lots[2]?.daily_id}</p>
              <HistoryWidget draw={lots[2]?.draw.sort((a,b) => a-b)  as any} />
            </div>
          </div>
          <AdsBanner />
          {/* <Jackpot /> */}
          {/* <WinnerDisplay /> */}
        </div>
      </div>
    </div>
  );
}

export default History;
