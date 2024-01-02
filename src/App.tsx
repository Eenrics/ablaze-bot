import { useAtom } from "jotai";
import {
  CurrentGame,
  GetUserBets,
  DisplayToShow,
  INDEX,
  IsDisplayLive,
  Renderer,
  SELECTEDSPOTS,
  SPOT,
  StartBallAnimation,
  USER_BETS,
  TempData,
  gameID as globalGameId,
  isUserBetsExist,
} from "./data/data.source";
import { useEffect } from "react";

export const App = () => {
  const [, setGameID] = useAtom(globalGameId);
  const [_userBets, setUserBets] = useAtom(USER_BETS)
  const [_isUserBets, setIsUserBets] = useAtom(isUserBetsExist)
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

      if (res.status === 200) {

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
            })
          }
        }
      }, 1500);
      return () => clearInterval(intervalId);
    }
  }, [SPOT.init, StartBallAnimation.init]);
  return (
    <div className="w-screen h-full flex justify-center items-center">
      {true ? <Renderer /> :
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#950B01]  to-[#CE0F00] opacity-95 flex flex-col items-center justify-center  ">
          <div className="w-60 h-60 rounded-full border-4 border-white animate-pulse flex items-center justify-center">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              className="w-40 h-40"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M5 12.55a11 11 0 0 1 14.08 0"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M1.42 9a16 16 0 0 1 21.16 0"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M8.53 16.11a6 6 0 0 1 6.95 0"
              />
              <line x1="12" y1="20" x2="12" y2="20" />
            </svg>
          </div>


          {/* Text */}
          <p className="text-white mt-2 ">connecting ...</p>


        </div>}
    </div>
  );
};
