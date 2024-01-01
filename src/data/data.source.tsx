const APP_URL = import.meta.env.VITE_API_URL
import { io } from "socket.io-client";
import { PrimitiveAtom, atom, useAtom } from 'jotai';
import { getServerTime, setServerTime } from "../services/serverTime";
import { useEffect, useState } from "react";
import { useGetCurrentGames } from "../services/Api/queres";
import { setTimer, startTimer } from "../services/timeCounterService";
import axios from "axios";
import BallMixing from '../pages/ball-mixing/ball.mixing';
import History from '../pages/history/history';
import Display from '../pages/draw-display/display/display';
const socket = io(APP_URL.split("game")[0]);


export let gameID=atom(6000);
export const HEAD=false;
export const TAILS=false;
export const EVEN=false;
export const CurrentGameID="";
export const IsDisplayLive=atom(false);
export const INDEX=atom(2)
export const PAYOUTINDEX=atom<number>(10);
export const MINUTE=atom(0)
export const SECOND=atom(0)
export const ISONLINE=  atom(false)
export const SELECTEDSPOTS=atom([2,31,4,5,46,7,80,9,10,72,21,29,33,44,55,66,52,18,74,50])
export const SPOT=atom(4)
const EndTime=atom(0)
const DisplayToShow = atom<'BallMixing' | 'History' | 'Display'>('Display');
 


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

// Timer section

const CurrentGame = async () => {
  const [ID, setGameID] = useAtom(gameID);
  const [history, setHisoricalGame] = useAtom(SELECTEDSPOTS);
  const [end, setEnd] = useAtom(EndTime);
 
  const response = await axios.get(APP_URL + "get-current-games");
  console.log("current data", response.data, Date.UTC);
 
  if (response.status === 200) {
// EndTime.init=response?.data?.currentGame?.end_time;
setGameID(()=>gameID.init=response?.data?.currentGame?.daily_id,)
setHisoricalGame(()=>SELECTEDSPOTS.init=response?.data?.previousGame?.draw,)
// setHisoricalGame(()=>EndTime.init=response?.data?.currentGame?.end_time,)
// gameID.init=response?.data?.currentGame?.daily_id;

// console.log(EndTime .init  )
// console.log("==========")
// console.log(gameID.init   )

  }
  return response?.data?.currentGame?.end_time;
};
const formatTime = (dateTime: Date | undefined): string => {
  return dateTime
    ? dateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
    : 'Not available';
};
function countdown(minutes: number, seconds: number, callback: (minutes: number, seconds: number) => void) {
  let totalSeconds = minutes * 60 + seconds;

  const intervalId = setInterval(() => {
    // clearInterval(intervalId);

    const displayMinutes = Math.floor(totalSeconds / 60);
    const displaySeconds = totalSeconds % 60;

   
    if (callback) {
    

      callback(displayMinutes, displaySeconds);
    }

    if (totalSeconds <= 0) {
      clearInterval(intervalId);
    } else {
      totalSeconds--;
      clearInterval(intervalId);
    }
  }, 1000);
}
let servertime;



const fetchServerTime = () => {
  // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>");
  socket.on("timeStamp", (val) => {
    
    if (val?.now) setServerTime(val?.now);


    // servertime = new Date(val?.now).getTime(); 
     console.log("###############")
     console.log(val.minute);
     console.log(val.second);
    //  MINUTE.init=val?.now
  
  });
};
 export const GameTime=async ()=>{
  // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>");
  fetchServerTime();
  const [min, setMinutes] = useAtom(MINUTE);
  const [sec, SetSeconds] = useAtom(SELECTEDSPOTS);
 
  const currentTime: Date  = getServerTime();
  const CurrentGameEndTime=await CurrentGame();
  // const formattedTime = formatTime(currentTime);
  // console.log('Formatted Time:', formattedTime);

  //fallback
  if (!currentTime) {
    // If currentDateTime is undefined, fetch server time again
    await fetchServerTime();
    // console.log("=======>"+gameID.init)
    // console.log("=======>"+CurrentGameEndTime)
    // console.log("=======>"+formattedTime)
  }
 
    const newDate: Date = new Date(CurrentGameEndTime);
    const fg = newDate.getTime() - currentTime.getTime();
  countdown(new Date(fg).getMinutes(),  new Date(fg).getSeconds(), (minutes, seconds) => {
      // console.log(`${minutes}:${seconds}`);
setMinutes(()=>MINUTE.init=minutes)
setMinutes(()=>SECOND.init=seconds)
   console.log(`${MINUTE.init}:${SECOND.init}`);
    });
  

 }


export const Renderer =()=>{
  fetchServerTime();
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