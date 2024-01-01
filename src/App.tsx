import { useAtom } from "jotai";
import {
  CurrentGame,
  Renderer,
  SELECTEDSPOTS,
  SPOT,
  StartBallAnimation,
  gameID as globalGameId,
} from "./data/data.source";
import { useEffect, useState } from "react";

export const App = () => {
  const [, setGameID] = useAtom(globalGameId);
  const [, setSelectedSpots] = useAtom(SELECTEDSPOTS);
  const [tempCont, setTempCont] = useState([])

  useEffect(() => {
    const fun = async () => {
      const res = await CurrentGame();
      if (res.status === 200) {
        console.log("calling current game")
        setGameID(() => (globalGameId.init = res?.data?.currentGame?.daily_id));
        setTempCont(res?.data?.previousGame?.draw);
      }
    };
    fun();
  }, []);

  const [selectedSpot, setSelectedSpot] = useAtom(SPOT)
  const [ballAnimation, setBallAnimation] = useAtom(StartBallAnimation)

  useEffect(() => {
    if (ballAnimation) {
      if (SELECTEDSPOTS.init.length === 20) {
        setTimeout(() => {
          setSelectedSpot(() => SPOT.init = undefined)
        }, 1500)
        return setBallAnimation(() => StartBallAnimation.init = false)
      }
      const intervalId = setInterval(() => {
        if (selectedSpot) {
          setSelectedSpot(() => SPOT.init = undefined)
        } else {
          const spot = tempCont.shift()
          setSelectedSpot(() => SPOT.init = spot)
          setSelectedSpots(() => SELECTEDSPOTS.init = [...SELECTEDSPOTS.init, spot] as Array<number>)
        }
      }, 1500)
      return () => clearInterval(intervalId)
    }
  }, [SPOT.init, StartBallAnimation.init])
  return (
    <div className="w-screen h-full flex justify-center items-center">
      <Renderer />
    </div>
  );
};
