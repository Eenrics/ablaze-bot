const APP_URL = import.meta.env.VITE_API_URL;
import { io } from "socket.io-client";
import { atom, useAtom } from "jotai";
import { useRef, useState } from "react";
import axios from "axios";
import History from "../pages/history/history";
import Display from "../pages/draw-display/display/display";
import { HISTORTYPE } from "../types";
const socket = io(APP_URL.split("game")[0]);

export let gameID = atom(6000);
export const HEAD = false;
export const TAILS = false;
export const MINUTE = atom(0);
export const SECOND = atom(0);
export const EVEN = false;
export const CurrentGameID = "";
export const IsDisplayLive = atom(false);
export const INDEX = atom(0);
export const PAYOUTINDEX = atom<number>(10);
export const ISONLINE = atom(false);
export const SELECTEDSPOTS = atom<number[]>([]);
export const USER_BETS = atom<object | undefined>(undefined);
export const isUserBetsExist = atom(false);
export const SPOT = atom<number | undefined>(undefined);
export const DisplayToShow = atom<"BallMixing" | "History" | "Display">(
  "Display",
);
export const historyDataAtom = atom<HISTORTYPE[]>([]);
export const StartBallAnimation = atom(false);
export const TempData = atom<number[]>([]);
export const BETPAYOUTTABLE: Record<number, Record<string, number>[]> = {
  1: [{ num: 1, odd: 3.8 }],
  2: [{ num: 2, odd: 15 }],
  3: [
    { num: 2, odd: 3 },
    { num: 3, odd: 35 },
  ],
  4: [
    { num: 2, odd: 1 },
    { num: 3, odd: 8 },
    { num: 4, odd: 100 },
  ],
  5: [
    { num: 2, odd: 1 },
    { num: 3, odd: 3 },
    { num: 4, odd: 15 },
    { num: 5, odd: 300 },
  ],
  6: [
    { num: 3, odd: 1 },
    { num: 4, odd: 10 },
    { num: 5, odd: 70 },
    { num: 6, odd: 1800 },
  ],
  7: [
    { num: 3, odd: 1 },
    { num: 4, odd: 6 },
    { num: 5, odd: 12 },
    { num: 6, odd: 120 },
    { num: 7, odd: 2150 },
  ],
  8: [
    { num: 4, odd: 4 },
    { num: 5, odd: 8 },
    { num: 6, odd: 68 },
    { num: 7, odd: 600 },
    { num: 8, odd: 3000 },
  ],
  9: [
    { num: 4, odd: 3 },
    { num: 5, odd: 6 },
    { num: 6, odd: 18 },
    { num: 7, odd: 120 },
    { num: 8, odd: 1800 },
    { num: 9, odd: 4200 },
  ],
  10: [
    { num: 4, odd: 2 },
    { num: 5, odd: 4 },
    { num: 6, odd: 12 },
    { num: 7, odd: 40 },
    { num: 8, odd: 400 },
    { num: 9, odd: 2500 },
    { num: 10, odd: 5000 },
  ],
};


export const ONLINE = atom(false);
export const OFFLINE = atom(true);

socket.on("disconnect", () => {
  const [, setOnline] = useAtom(ONLINE);
  const [, setOffline] = useAtom(OFFLINE);
  setOnline(() => (ONLINE.init = !socket.disconnected));
  setOffline(() => (OFFLINE.init = socket.disconnected));
  console.log(socket.disconnected); // true
});
export const CheckIsOffline = () => {

  // socket.on("connect", () => {
  //   const [, setOnline] = useAtom(ONLINE);
  //   const [, setOffline] = useAtom(OFFLINE);
  //   setOnline(()=>(ONLINE.init = true));
  //   setOffline(()=>(OFFLINE.init = false));
  //   console.log(socket.disconnected); // false
  // });



}
// const PayoutTblAnimn = (seconds: number) => {
//   const [, setSec] = useAtom(PAYOUTINDEX);

//   switch (seconds) {
//     case 55:
//       setSec(() => (PAYOUTINDEX.init = 10));

//       ;
//       break;
//     case 50:
//       setSec(() => (PAYOUTINDEX.init = 9));
//       break;
//     case 45:
//       setSec(() => (PAYOUTINDEX.init = 8));
//       break;
//     case 40:
//       setSec(() => (PAYOUTINDEX.init = 7));
//       break;
//     case 35:
//       setSec(() => (PAYOUTINDEX.init = 6));
//       break;
//     case 30:
//       setSec(() => (PAYOUTINDEX.init = 5));
//       break;
//     case 25:
//       setSec(() => (PAYOUTINDEX.init = 4));
//       break;
//     case 20:
//       setSec(() => (PAYOUTINDEX.init = 3));
//       break;
//     case 15:
//       setSec(() => (PAYOUTINDEX.init = 2));
//       break;
//     case 10:
//       setSec(() => (PAYOUTINDEX.init = 1));
//       break;
//     case 5:
//       setSec(() => (PAYOUTINDEX.init = 1));
//       break;
//     default:
//       break;
//   }
// }
// const CheckcIsOline = () => {

//   socket.on("connect", () => {
//     const [, setOnline] = useAtom(ONLINE);
//     const [, setOffline] = useAtom(OFFLINE);
//     setOnline(() => (ONLINE.init = true));
//     setOffline(() => (OFFLINE.init = false));
//     console.log(socket.disconnected); // false
//   });

//   // socket.on("disconnect", () => {
//   //   const [, setOnline] = useAtom(ONLINE);
//   //   const [, setOffline] = useAtom(OFFLINE);
//   //   setOnline(()=>(ONLINE.init = false));
//   //   setOffline(()=>(OFFLINE.init = true));
//   //   console.log(socket.disconnected); // true
//   // });

// }
// // Timer section
// // 🚩 when the timer hits 00:00 the component timer will be changed to bet-close comp- before 10 sec retry to get the result  if the result is not empty go to the below line
// // 🚩 then after  we change isDisplayLive to True ==>
// // 🚩 after the draw is finished we change the @Renderer  to History
// // 🚩 then after 4 sec change the  @Renderer change to Display show timer header
// // 🚩 then on display  we are gonna  change IsDisplayLive to false
export const CurrentGame = async () => {
  const response = await axios.get(APP_URL + "get-current-games");
  return response;
};

const fetchServerTime = () => {
  const [, setMinutes] = useAtom(MINUTE);
  const [, setSeconds] = useAtom(SECOND);
  const [, setGameID] = useAtom(gameID);
  const [, setHistory] = useAtom(SELECTEDSPOTS);
  const [, setIsDisplay] = useAtom(IsDisplayLive);
  const [newSpots, setNewSpots] = useState([]);
  const [_tempCont, setTempCont] = useAtom(TempData);
  const [newDailyId, setNewDailyId] = useState();
  const [, setStartBallAnimation] = useAtom(StartBallAnimation);
  const [, _setOnline] = useAtom(ONLINE);
  const [, _setOffline] = useAtom(OFFLINE);
  const isFetched = useRef(false);

  // socket.on("disconnect", () => {

  //   setOnline(()=>(ONLINE.init = !socket.disconnected));
  //   setOffline(()=>(OFFLINE.init = socket.disconnected));
  //   console.log(socket.disconnected); // true
  // });

  socket.on("timeStamp", async (val) => {
    if (val.minutes == 2 && val.seconds == 0) {
      isFetched.current = false;
      if (newDailyId && newSpots && newSpots.length) {
        setIsDisplay(() => (IsDisplayLive.init = true));
        setGameID(() => (gameID.init = newDailyId));
        setHistory(() => (SELECTEDSPOTS.init = newSpots));
      } else {
        setGameID(() => (gameID.init += 1));
      }
    }
    if (val.minutes == 2 && val.seconds == 9 && !isFetched.current) {
      isFetched.current = true;
      CurrentGame().then((res) => {
        console.log(res);
        if (res.status === 200) {
          setNewDailyId(res?.data?.currentGame?.daily_id);

          // setNewSpots(res?.data?.previousGame?.draw);
          setTimeout(() => {
            setNewSpots(() => (SELECTEDSPOTS.init = []));
            setIsDisplay(() => (IsDisplayLive.init = true));

            setStartBallAnimation(() => (StartBallAnimation.init = true));
            setTempCont(() => (TempData.init = res?.data?.previousGame?.draw));
          }, 9000);
        }
      });

      // setIsDisplay(() => (IsDisplayLive.init = true));
    }
    if (val.minutes == 2) {
      setMinutes(() => (MINUTE.init = 0));
    } else {
      setMinutes(() => (MINUTE.init = val.minutes));
    }
    setSeconds(() => (SECOND.init = val.seconds));
  });
};


export const GameHistory = async () => {
  const [_gameHistory, setGameHistory] = useAtom(historyDataAtom);
  const isFetched = useRef(false);

  if (!isFetched.current) {
    isFetched.current = true;

    const response = await axios.get(APP_URL + "get-games");
    console.log("history data", response.data);

    if (
      response.status === 200 &&
      Array.isArray(response.data) &&
      response.data.length > 2
    ) {
      setGameHistory(response.data as HISTORTYPE[]);
    }
  }
};

export const GetUserBets = async () => {
  const queryParams = new URLSearchParams(window.location.search);

  const gameId = queryParams.get("game_id");
  const userId = queryParams.get("user_id");

  console.log({ gameId })
  console.log({ userId })
  if (gameId && userId && gameId !== "" && userId !== "") {
    const response = await axios.get(`https://bets.et:3001/game-service/one-game-bets`, {
      params: {
        user_id: userId,
        game_id: gameId,
      },
    });
    console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%')
    console.log(response.data)
    console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%')
    return response;
  }
  return
}





///
export const Renderer = () => {


  fetchServerTime();
  const [Screen] = useAtom(DisplayToShow);
  switch (Screen) {
    case "BallMixing":
      return <History />;
    case "History":
      return <History />;
    case "Display":
      return <Display />;
    default:
      return null;
  }
};
