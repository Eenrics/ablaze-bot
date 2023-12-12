import { equal, heads } from "../../../services/gameService";

function GameTitle() {
  return (
    <div className="flex justify-end items-center py-[1px]">
      <div
        className={`flex justify-center items-center ${
          heads.value
            ? "bg-[#f6f640]/100"
            : equal.value
            ? "bg-[#C6D6D6]"
            : "bg-[#a51205e5]"
        }  uppercase rounded-[4px] text-[3.5vw] text-black font-semibold px-2 h-[2.5vh] min-w-[8vh]  py-[1px]`}
      >
        {heads.value ? "HEADS" : equal.value ? "Even" : " "}
      </div>
    </div>
  );
}

export default GameTitle;
