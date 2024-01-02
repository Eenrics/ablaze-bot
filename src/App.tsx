import { useAtom } from "jotai";
import {
  CurrentGame,
  DisplayToShow,
  INDEX,
  IsDisplayLive,
  Renderer,
  SELECTEDSPOTS,
  SPOT,
  StartBallAnimation,
  TempData,
  gameID as globalGameId,
} from "./data/data.source";
import { useEffect, useState } from "react";

export const App = () => {
  const [, setGameID] = useAtom(globalGameId);
  const [, setHisoricalGame] = useAtom(SELECTEDSPOTS);
  const [tempCont, setTempCont] = useAtom(TempData);
  // const [tempCont, setTempCont] = useState([])
  const [selectedSpot, setSelectedSpot] = useAtom(SPOT);
  const [ballAnimation, setBallAnimation] = useAtom(StartBallAnimation);
  const [, setIsDisplay] = useAtom(IsDisplayLive);
  const [, setNextDisplay] = useAtom(DisplayToShow);
  const [, setLength] = useAtom(INDEX);
  useEffect(() => {
    const fun = async () => {
      const res = await CurrentGame();
      // console.log("called");
      if (res.status === 200) {
        console.log("called");
        setGameID(() => (globalGameId.init = res?.data?.currentGame?.daily_id));
        {
          !IsDisplayLive.init
            ? setHisoricalGame(
                () => (SELECTEDSPOTS.init = res?.data?.previousGame?.draw),
              )
            : setTempCont(
                () => (TempData.init = res?.data?.previousGame?.draw),
              );
        }
      }
    };

    fun();
  }, []);
  useEffect(() => {
    console.log("anim called");
    if (ballAnimation) {
      console.log(SELECTEDSPOTS.init);
      if (SELECTEDSPOTS.init.length === 20) {
        setTimeout(() => {
          setSelectedSpot(() => (SPOT.init = undefined));
        }, 1500);
        return setBallAnimation(() => (StartBallAnimation.init = false));
      }
      const intervalId = setInterval(() => {
        if (selectedSpot) {
          setSelectedSpot(() => (SPOT.init = undefined));
        } else {
          const spot = tempCont.shift();
          setSelectedSpot(() => (SPOT.init = spot));

          setHisoricalGame(
            () =>
              (SELECTEDSPOTS.init = [
                ...SELECTEDSPOTS.init,
                spot,
              ] as Array<number>),
          );
          setLength(() => (INDEX.init = SELECTEDSPOTS.init.length));
          if (SELECTEDSPOTS.init.length === 20) {
            setTimeout(() => {
            setIsDisplay(() => (IsDisplayLive.init = false));
            setNextDisplay(() => (DisplayToShow.init = "History"));
            },2000)
          }
        }
      }, 1500);
      return () => clearInterval(intervalId);
    }
  }, [SPOT.init, StartBallAnimation.init]);
  return (
    <div className="w-screen h-full flex justify-center items-center">
      <Renderer />
    </div>
  );
};
