import { computed, effect, signal } from "@preact/signals-react";
import { currentRoute, nextRoute } from "./general";
import { display, DisplayType } from "../utils/displayGameSignal";

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

enum TimerStatus {
  RUNNING = "running",
  PAUSED = "paused",
  STOPPED = "stopped",
  TIMEOUT = "timeout",
}

const timerStatus = signal<TimerStatus>(TimerStatus.STOPPED);

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
  console.log(
    "timerStatus",
    seconds.value,
    timerStatus.value,
    currentRoute.value,
  );
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
                display.value = DisplayType.LIVE;
                nextRoute.value = "";
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

const totalBallSelectedCount = signal(0);
export const selectedBalls = signal<number[]>([]);
export const selectedBall = signal<number | undefined>(undefined);
export const showBall = signal(false);

enum AnimationStatus {
  RUNNING = "running",
  STOPPED = "stopped",
}

enum GameStatus {
  RUNNING = "running",
  STOPPED = "stopped",
}

const gameStatus = signal<GameStatus>(GameStatus.STOPPED);

const animationStatus = signal<AnimationStatus>(AnimationStatus.STOPPED);

export const selectBall = (ballNumber: number) => {
  selectedBall.value = ballNumber;
  totalBallSelectedCount.value++;
  selectedBalls.value = [...selectedBalls.value, ballNumber];
};

export const emptyBalls = () => {
  totalBallSelectedCount.value = 0;
  selectedBalls.value = [];
  selectedBall.value = undefined;
};

export const startBallAnimation = () => {
  animationStatus.value = AnimationStatus.RUNNING;
};

export const stopBallAnimation = () => {
  animationStatus.value = AnimationStatus.STOPPED;
};

export const showBallAnimation = () => {
  showBall.value = true;
};

export const hideBallAnimation = () => {
  showBall.value = false;
};

let ballAnimationInterval: undefined | number = undefined;

export const startGame = () => {
  animationStatus.value = AnimationStatus.RUNNING;
  gameStatus.value = GameStatus.RUNNING;
  emptyBalls();

  ballAnimationInterval = setInterval(() => {
    if (showBall.value) {
      hideBallAnimation();
    } else {
      selectBall(Math.floor(Math.random() * 80) + 1);
      showBallAnimation();
    }
  }, 3000);
};

export const stopGame = () => {
  setTimeout(() => {
    hideBallAnimation();
    stopBallAnimation();
    clearInterval(ballAnimationInterval);
    setTimeout(() => {
      gameStatus.value = GameStatus.STOPPED;
    }, 3000);
  }, 3000);
};

effect(() => {
  if (selectedBalls.value.length === 20) {
    stopGame();
  }
});

enum GameEngineRouter {
  INTRO = "/intro",
  GAME = "/game",
  HISTORY = "/history",
  STAT = "/stat",
}

const gameEngineRouter = signal<GameEngineRouter>(GameEngineRouter.INTRO);

const GameEngine = () => {
  // SECOND ROUTE
  effect(() => {
    if (timerStatus.value === TimerStatus.TIMEOUT) {
      console.log("timeout **");
      timerStatus.value = TimerStatus.STOPPED;
      currentRoute.value = "/intro";
      setTimeout(() => {
        currentRoute.value = "/";
        display.value = DisplayType.LIVE;
        startGame();
        gameEngineRouter.value = GameEngineRouter.HISTORY;
      }, 5000);
    }
  });

  effect(() => {
    if (
      gameStatus.value === GameStatus.STOPPED &&
      gameEngineRouter.value === GameEngineRouter.HISTORY
    ) {
      console.log("animationStatus **");
      currentRoute.value = "/history";
      setTimeout(() => {
        currentRoute.value = "/";
        display.value = DisplayType.STAT;
        gameEngineRouter.value = GameEngineRouter.INTRO;
      }, 5000);
    }
  });

  // FIRST ROUTE
  effect(() => {
    if (gameEngineRouter.value === GameEngineRouter.INTRO) {
      setTimer({
        days: 0,
        hours: 0,
        minutes: 2,
        seconds: 0,
      });
      display.value = DisplayType.STAT;
      startTimer();
      nextRoute.value = "#setToLIVE";
    }
  });
};

GameEngine();
