import { useAtom } from "jotai";
import {
  CurrentGame,
  GetUserBets,
  Renderer,
  SELECTEDSPOTS,
  SPOT,
  StartBallAnimation,
  USER_BETS,
  gameID as globalGameId,
  isUserBetsExist,
} from "./data/data.source";
import { useEffect, useState } from "react";

export const App = () => {
  const [, setGameID] = useAtom(globalGameId);
  const [, setSelectedSpots] = useAtom(SELECTEDSPOTS);
  const [tempCont, setTempCont] = useState([])
  const [_userBets, setUserBets] = useAtom(USER_BETS)
  const [_isUserBets, setIsUserBets] = useAtom(isUserBetsExist)
  const [selectedSpot, setSelectedSpot] = useAtom(SPOT)
  const [ballAnimation, setBallAnimation] = useAtom(StartBallAnimation)

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
  }, [ballAnimation]);

  useEffect(() => {
    GetUserBets().then(response => {
      if (response?.status === 200) {
        if (response.data?.bets?.length > 0) {
          setUserBets(() => USER_BETS.init = response.data)
          setIsUserBets(() => isUserBetsExist.init = true)
        }
      }
    })
  }
    , [])

  useEffect(() => {
    if (ballAnimation) {
      if (SELECTEDSPOTS.init.length === 20) {
        setTimeout(() => {
          setSelectedSpot(() => SPOT.init = undefined)
        }, 1000)
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
      }, 1000)
      return () => clearInterval(intervalId)
    }
  }, [SPOT.init, StartBallAnimation.init])
  return (
    <div className="w-screen h-full flex justify-center items-center">
      <Renderer />
    </div>
  );
};
