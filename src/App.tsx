import { useAtom } from "jotai";
import {
  CurrentGame,
  Renderer,
  SELECTEDSPOTS,
  gameID as globalGameId,
} from "./data/data.source";
import { useEffect } from "react";

export const App = () => {
  const [, setGameID] = useAtom(globalGameId);
  const [, setHisoricalGame] = useAtom(SELECTEDSPOTS);

  useEffect(() => {
    const fun = async () => {
      const res = await CurrentGame();
      if (res.status === 200) {
        setGameID(() => (globalGameId.init = res?.data?.currentGame?.daily_id));
        setHisoricalGame(
          () => (SELECTEDSPOTS.init = res?.data?.previousGame?.draw)
        );
      }
    };
    fun();
  }, []);
  return (
    <div className="w-screen h-full flex justify-center items-center">
      <Renderer />
    </div>
  );
};
