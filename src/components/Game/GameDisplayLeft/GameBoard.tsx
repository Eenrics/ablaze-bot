import { motion } from "framer-motion";

interface Props {
  data: Array<number>;
  winNumbers: Array<number>;
}

function GameBoard(props: Props) {
  const { data, winNumbers } = props;

  return (
    <div className="grid grid-cols-10 grid-rows-10 gap-1 w-full max-w-[1000px]">
      {data?.map((num, index) => {
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className={`flex justify-center items-center ${
              winNumbers?.includes(num) ? "scale-down-center" : ""
            }`}
          >
            <div
              className={`cursor-default w-full h-full flex justify-center items-center rounded-[12px]`}
            >
              <div
                className={`font-semibold aspect-square flex w-full h-full justify-center items-center ${
                  winNumbers?.includes(num)
                    ? num > 40
                      ? "bg-[#f6f640]/60"
                      : "bg-[#f6f640]/100"
                    : "bg-gradient-to-b from-[#B31700] to-[#810801]"
                } rounded-[1vw]`}
              >
                <p
                  className={`eurasia text-center ${
                    winNumbers?.includes(num)
                      ? "text-black shadow-text"
                      : "text-white/20"
                  }`}
                >
                  {num}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default GameBoard;
