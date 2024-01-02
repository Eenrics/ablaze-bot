import { AnimatePresence, motion } from "framer-motion";
import BetsCard from "./bets.card";
import { USER_BETS } from "../../../../data/data.source";
import { useAtom } from "jotai";

function UserBets() {
  const [userBets] = useAtom(USER_BETS);
  const bets: object[] = [];
  const draw: number[] = [];
  let maximumPayout = 0;
  let minimunPayout = 0;
  if (
    typeof userBets === "object" &&
    "bets" in userBets &&
    Array.isArray(userBets.bets) &&
    userBets.bets.length > 0
  ) {
    bets.push(...userBets.bets);
  }
  if (
    typeof userBets === "object" &&
    "draw" in userBets &&
    Array.isArray(userBets.draw) &&
    userBets.draw.length > 0
  ) {
    draw.push(...userBets.draw);
  }
  if (
    typeof userBets === "object" &&
    "max_payout" in userBets &&
    typeof userBets.max_payout === "number"
  ) {
    maximumPayout = userBets.max_payout;
  }
  if (
    typeof userBets === "object" &&
    "min_payout" in userBets &&
    typeof userBets.min_payout === "number"
  ) {
    minimunPayout = userBets.min_payout;
  }

  console.log(
    { bets, draw, userBets },
    typeof userBets === "object" &&
      "bets" in userBets &&
      Array.isArray(userBets.bets) &&
      userBets.bets.length > 0,
  );
  return (
    <AnimatePresence>
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.2, delay: 0.5 }}
      >
        <div className="py-3 w-full flex flex-col gap-3  bg-[#c73e33] mt-5 h-auto max-h-300px overflow-scroll">
          <div className="flex justify-between mx-2">
            <h2 className=" uppercase font-semibold micro text-white">
              your numbers
            </h2>
            <p className=" font-semibold text-xs capitalize micro text-white">
              total tickets : <span>3</span>
            </p>
          </div>
          {bets.map((bet, i) => {
            return <BetsCard bet={bet} key={i} index={i} draw={draw} />;
          })}
        </div>
        <div className=" bg-[#b70d00] [box-shadow:0px_4px_4px_0px_#00000040] flex justify-between">
          <p className=" capitalize micro text-white text-sm p-3">
            min payout :{" "}
            <span className="text-[#ff0000] uppercase">
              {minimunPayout.toLocaleString()} birr
            </span>
          </p>
          <p className=" capitalize micro text-white text-sm p-3">
            max payout :{" "}
            <span className=" bg-gradient-to-b from-[#ffe500] to-[#7a6e01] bg-clip-text text-transparent font-extrabold uppercase ">
              {maximumPayout.toLocaleString()} birr
            </span>
          </p>
        </div>
      </motion.section>
    </AnimatePresence>
  );
}

export default UserBets;
