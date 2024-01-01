import React from "react";
import HistoryWidget from "./components/history.widget";
import AdsBanner from "../../components/ads-banner/ads.banner";
import MainHeader from "../../components/header/main.header";
const lots = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 70,
];
function History() {
  return (
    <div className="game-layout w-full min-h-screen overflow-x-hidden bg-gradient-to-r from-[#950B01]  to-[#CE0F00]">
      <MainHeader />

      {/* <GameStatusBox /> */}
      <AdsBanner />
      <div className="mt-2">
        <div className="grid ">
          <div className="w-full pl-2 flex flex-col justify-start mb-2 ">
            <div className="gap-2 mb-2" key={1234}>
              <p className="ml-3 text-[3.7vw] font-bold text-white">1234</p>
              <HistoryWidget draw={lots} />
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
