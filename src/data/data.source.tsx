const APP_URL = import.meta.env.VITE_API_URL
import { io } from "socket.io-client";
import { PrimitiveAtom, SetStateAction, atom, useAtom } from 'jotai';
import { getServerTime, setServerTime } from "../services/serverTime";
import { useEffect, useState } from "react";
import { useGetCurrentGames } from "../services/Api/queres";
import { setTimer, startTimer } from "../services/timeCounterService";
import axios from "axios";
import BallMixing from '../pages/ball-mixing/ball.mixing';
import History from '../pages/history/history';
import Display from '../pages/draw-display/display/display';
import { DRAWTYPE } from "../pages/history/components/history.widget";
import { HISTORTYPE } from "../types";
const socket = io(APP_URL.split("game")[0]);


export let gameID = atom(6000);
export const HEAD = false;
export const TAILS = false;
export const EVEN = false;
export const CurrentGameID = "";
export const IsDisplayLive = atom(true);
export const INDEX = atom(2)
export const PAYOUTINDEX = atom<number>(10);
export const MINUTE = atom(0)
export const SECOND = atom(0)
export const ISONLINE = atom(false)
export const SELECTEDSPOTS = atom([2, 31, 4, 5, 46, 7, 80, 9, 10, 72, 21, 29, 33, 44, 55, 66, 52, 18, 74, 50])
export const SPOT = atom(4)
const EndTime = atom(0)
const DisplayToShow = atom<'BallMixing' | 'History' | 'Display'>('Display');
export const USER_BETS = atom<object | undefined>(undefined)
export const isUserBetsExist = atom(false)
export const gameHistory = atom<HISTORTYPE[]>([])


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
const CheckInternet = () => {
  //TODO  check intenet connection and if tit is ofl;ine call the connecting layout

}

// Timer section

export const CurrentGame = async () => {
  const [ID, setGameID] = useAtom(gameID);
  const [history, setHisoricalGame] = useAtom(SELECTEDSPOTS);
  const [end, setEnd] = useAtom(EndTime);
  const [min, setMinutes] = useAtom(MINUTE);
  const [sec, SetSeconds] = useAtom(SECOND);

  const response = await axios.get(APP_URL + "get-current-games");
  console.log("current data", response.data, Date.UTC);

  if (response.status === 200) {
    // EndTime.init=response?.data?.currentGame?.end_time;
    setGameID(() => gameID.init = response?.data?.currentGame?.daily_id,)
    setHisoricalGame(() => SELECTEDSPOTS.init = response?.data?.previousGame?.draw,)
    setMinutes(() => MINUTE.init = response?.data?.currentGame.minutes)
    SetSeconds(() => SECOND.init = response?.data?.currentGame.seconds)

  }
  return response?.data?.currentGame?.end_time;
};

export const GameHistory = async () => {
  const [_gameHistory, setGameHistory] = useAtom(gameHistory)
  const response = await axios.get(APP_URL + "get-games");
  console.log("history data", response.data);
  if (response.status === 200 && Array.isArray(response.data) && response.data.length > 2) {
    setGameHistory(response.data as HISTORTYPE[]);
  }
};

export const GetUserBets = async () => {
  const queryParams = new URLSearchParams(window.location.search);
  const [_userBets, setUserBets] = useAtom(USER_BETS)
  const [_isUserBets, setIsUserBets] = useAtom(isUserBetsExist)

  const gameId = queryParams.get("game_id");
  const userId = queryParams.get("user_id");

  console.log(gameId)
  console.log(userId)
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
    if (response.status === 200) {
      if (response.data?.bets?.length > 0) {
        setUserBets(() => USER_BETS.init = response.data)
        setIsUserBets(() => isUserBetsExist.init = true)
      }
    }
  }
}

















const fetchServerTime = () => {
  const [min, setMinutes] = useAtom(MINUTE);
  const [sec, SetSeconds] = useAtom(SECOND);
  // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>");
  socket.on("timeStamp", async (val) => {

    if (val?.now) setServerTime(val?.now);


    // servertime = new Date(val?.now).getTime(); 
    //  console.log("###############")
    //  console.log(val.minutes);
    //  console.log(val.seconds);
    //  MINUTE.init=val?.now
    setMinutes(() => MINUTE.init = val.minutes)
    SetSeconds(() => SECOND.init = val.seconds)
    // if (MINUTE.init == 0 && SECOND.init == 10) {
    //   const res = await CurrentGame();
    //   //TODO after the current game trys to fetch the result if it have the data nav to draw display
    //   //else restart the timer


    //   console.log("***************************")
    // }
  });
};


export const GameTime = async () => {
  // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>");
  fetchServerTime();


  const currentTime: Date = getServerTime();



  //fallback
  if (!currentTime) {
    // If currentDateTime is undefined, fetch server time again
    await fetchServerTime();

  }




}






///
export const Renderer = () => {
  GameTime();
  const [Screen] = useAtom(DisplayToShow);
  switch (Screen) {
    case 'BallMixing':
      return <BallMixing />;
    case 'History':
      return <History />;
    case 'Display':
      return <Display />;
    default:
      return null;
  }
}