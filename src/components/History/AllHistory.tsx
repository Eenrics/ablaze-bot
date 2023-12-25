import { HISTORTYPE } from "../../types";
import HistoryCard from "./HistoryCard";

export default function AllHistory({ data }: { data: HISTORTYPE[] }) {
  return data.map((win: HISTORTYPE, index: number) => {
    console.log({ win });
    return (
      <>
        {index < 3 && (
          <div className="gap-2 mb-2" key={win?.daily_id}>
            <p className="ml-3 text-[3.7vw] font-bold text-white">
              {win?.daily_id}
            </p>
            <HistoryCard draw={win?.draw} />
          </div>
        )}
      </>
    );
  });
}
