import axios from "axios";
const APP_URL = import.meta.env.VITE_API_URL;

export async function getCurrentGames() {
  return await axios.get(APP_URL + "get-current-games");
}
export async function getGamesHistory() {
  return await axios.get(APP_URL + "get-games");
}
export async function getDailyGame(id: string) {
  return await axios.get(APP_URL + "get-daily-game/" + id);
}
