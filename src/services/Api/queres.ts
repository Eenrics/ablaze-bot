import { useQuery } from "@tanstack/react-query";
import { getCurrentGames, getDailyGame, getGamesHistory } from "./ApiFunctions";
export const useGetCurrentGames = () =>
  //enableValue: boolean
  {
    return useQuery({
      queryKey: ["QUERY_KEYS.useGetCurrentGames"],
      queryFn: getCurrentGames,
      // enabled: enableValue,
    });
  };

export const useGetGamesHistory = () => {
  return useQuery({
    queryKey: ["useGetHistoryGames"],
    queryFn: getGamesHistory,
  });
};
export const useGetDailyGame = ({
  gameId,
  isEnabled,
}: {
  gameId: number;
  isEnabled: boolean;
}) => {
  return useQuery({
    queryKey: ["QUERY_KEYS.useGetDailyGame"],
    queryFn: () => getDailyGame(gameId),
    enabled: isEnabled ? true : false,
  });
};
