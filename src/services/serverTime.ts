type Time = Date | string | number;

export const setServerTime = (serverTime: Time) => {
  localStorage.setItem(
    "serverTime",
    JSON.stringify({
      serverTime: new Date(serverTime).getTime(),
      savedTime: new Date().getTime(),
    }),
  );
};

export const getServerTime = () => {
  const localValue = localStorage.getItem("serverTime");
  const { serverTime, savedTime } = localValue
    ? JSON.parse(localValue)
    : {
        serverTime: new Date().getTime(),
        savedTime: new Date().getTime(),
      };
  const now = new Date();
  const diff = now.getTime() - new Date(savedTime).getTime();
  return new Date(new Date(serverTime).getTime() + diff);
};
