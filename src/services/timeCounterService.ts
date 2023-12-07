import { computed, effect, signal } from "@preact/signals-react";
import { currentRoute, nextRoute } from "./routeService";

export const days = signal<number>(0);
export const hours = signal<number>(0);
export const minutes = signal<number>(0);
export const seconds = signal<number>(0);

export const hoursDisplay = computed(() => {
  return hours.value > 9 ? hours.value : `0${hours.value}`;
});

export const minutesDisplay = computed(() => {
  return minutes.value > 9 ? minutes.value : `0${minutes.value}`;
});

export const secondsDisplay = computed(() => {
  return seconds.value > 9 ? seconds.value : `0${seconds.value}`;
});

export enum TimerStatus {
  RUNNING = "running",
  PAUSED = "paused",
  STOPPED = "stopped",
  TIMEOUT = "timeout",
}

export const timerStatus = signal<TimerStatus>(TimerStatus.STOPPED);

interface SetTimer {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const setTimer = (startTimerArg: SetTimer) => {
  days.value = startTimerArg.days || 0;
  hours.value = startTimerArg.hours || 0;
  minutes.value = startTimerArg.minutes || 0;
  seconds.value = startTimerArg.seconds || 0;
};

export const startTimer = () => {
  timerStatus.value = TimerStatus.RUNNING;
};

export const pauseTimer = () => {
  timerStatus.value = TimerStatus.PAUSED;
};

export const stopTimer = () => {
  timerStatus.value = TimerStatus.STOPPED;
  days.value = 0;
  hours.value = 0;
  minutes.value = 0;
  seconds.value = 0;
};

effect(() => {
  if (timerStatus.value === TimerStatus.RUNNING) {
    const interval = setInterval(() => {
      if (seconds.value > 0) {
        seconds.value--;
      } else {
        if (minutes.value > 0) {
          minutes.value--;
          seconds.value = 59;
        } else {
          if (hours.value > 0) {
            hours.value--;
            minutes.value = 59;
            seconds.value = 59;
          } else {
            if (days.value > 0) {
              days.value--;
              hours.value = 23;
              minutes.value = 59;
              seconds.value = 59;
            } else {
              timerStatus.value = TimerStatus.TIMEOUT;
              clearInterval(interval);
              if (nextRoute.value?.startsWith("#setToLIVE")) {
                // display.value = DisplayType.LIVE;
                // nextRoute.value = "";
              } else {
                currentRoute.value = nextRoute.value;
                nextRoute.value = "";
              }
            }
          }
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }
  return () => {};
});
