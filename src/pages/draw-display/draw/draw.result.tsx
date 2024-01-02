import AdsBanner from "../../../components/ads-banner/ads.banner";
import MainHeader from "../../../components/header/main.header";
import HeadEven from "../components/game-board/head.even";
import TailsEvenWithGameNumbers from "../components/game-board/tails.even.game.number";
import BetTimer from "../components/game-header/bet.timer";
import NumberBoard from "../components/game-header/number.board";
import { SELECTEDSPOTS } from "../../../data/data.source";
import DrawerTube from "../components/game-board/drawer.tube";
import PayoutTable from "../components/game-payout/payout.table";
const data = Array.from({ length: 80 }, (_, index) => index + 1);

function DrawResults() {
  return (
    <div className="game-layout w-full min-h-screen overflow-x-hidden bg-gradient-to-r from-[#950B01]  to-[#CE0F00]">
      <MainHeader />
      {/* <BetClosed/> */}
      <BetTimer />
      <AdsBanner />
      <div className="w-full h-full col-span-3">
        <div
          className={`w-full col-span-10 flex flex-col gap-2 px-2  ${"inset-shadow"}`}
        >
          {/* <JackpotDisplay /> */}
          <div className=" grid grid-cols-10 ">
            <div className={"col-span-6 space-y-3"}>
              <HeadEven />

              <NumberBoard data={data} winNumbers={SELECTEDSPOTS.init} />
              <TailsEvenWithGameNumbers />
            </div>

            <div className="col-span-4">
              <DrawerTube />
            </div>
          </div>
        </div>
        <PayoutTable />
      </div>
    </div>
  );
}

export default DrawResults;
