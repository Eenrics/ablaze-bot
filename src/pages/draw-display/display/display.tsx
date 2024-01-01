import React from "react";
import AdsBanner from "../../../components/ads-banner/ads.banner";
import MainHeader from "../../../components/header/main.header";
import { AnimatePresence } from "framer-motion";
import HeadEven from "../components/game-board/head.even";
import TailsEvenWithGameNumbers from "../components/game-board/tails.even.game.number";
import BetTimer from "../components/game-header/bet.timer";
import BetClosed from "../components/game-header/bet.closed";
import NumberBoard from "../components/game-header/number.board";
import { USER_BETS, IsDisplayLive, SELECTEDSPOTS, isUserBetsExist, } from "../../../data/data.source";
import DrawerTube from "../components/game-board/drawer.tube";
import PayoutTable from "../components/game-payout/payout.table";
import UserBets from "../components/user-bets/user.bets";
import { useAtom } from "jotai";
const data = Array.from({ length: 80 }, (_, index) => index + 1);

function Display() {
  const [isUserBets] = useAtom(isUserBetsExist)
  console.log("userBets", isUserBets)
  return (
    <div className="game-layout w-full min-h-screen overflow-x-hidden bg-gradient-to-r from-[#950B01]  to-[#CE0F00]">
      <MainHeader />
      {/* <BetClosed/> */}
      <BetTimer />
      <AdsBanner />
      <div className="w-full h-full col-span-3">
        <div
          className={`w-full col-span-10 flex flex-col gap-2 px-2  ${IsDisplayLive.init && "inset-shadow"}`}
        >
          {/* <JackpotDisplay /> */}
          <div className=" grid grid-cols-10 ">
            <div className={
              IsDisplayLive.init
                ? "col-span-6 space-y-3"
                : "col-span-10  "
            }>
              <HeadEven />

              <NumberBoard data={data} winNumbers={SELECTEDSPOTS.init} />
              <TailsEvenWithGameNumbers />
            </div>

            <div className="col-span-4"><DrawerTube /></div>
          </div>
        </div>
        {!(isUserBets) ? <PayoutTable /> :
          <UserBets />}
      </div>
    </div>
  );
}

export default Display;
