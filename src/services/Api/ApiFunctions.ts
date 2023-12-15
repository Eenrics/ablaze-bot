import axios from "axios";
const APP_URL = import.meta.env.VITE_API_URL;

export async function getCurrentGames() {
  const data = await axios.get(APP_URL + "get-current-games");
  console.log("current data", data.data, Date.UTC);
  return data;
}
export async function getGamesHistory() {
  return await axios.get(APP_URL + "get-games");
}
export async function getDailyGame(id: number) {
  return await axios.get(APP_URL + "get-daily-game/" + id);
}
