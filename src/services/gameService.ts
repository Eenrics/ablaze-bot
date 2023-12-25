import { effect, signal } from "@preact/signals-react";
import { currentRoute } from "./routeService";
import { display, DisplayType } from "../utils/displayGameSignal";
import { TimerStatus, seconds, timerStatus } from "./timeCounterService";
import { DisplayRightType, displayRight } from "../utils/displayRightSignal";

const totalBallSelectedCount = signal(0);
export const index = signal(0);
export const selectedNewBalls = signal<number[]>([]);
export const selectedBalls = signal<number[]>([]);
export const selectedBall = signal<number | undefined>(undefined);
export const showBall = signal(false);
export const heads = signal(false);
export const tails = signal(false);
export const equal = signal(false);
export const gameId = signal(0);
enum AnimationStatus {
  RUNNING = "running",
  STOPPED = "stopped",
}

enum GameStatus {
  RUNNING = "running",
  STOPPED = "stopped",
}

export const dIndex = signal<number>(10);

export const BetoddToDisplay: Record<number, Record<string, number>[]> = {
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

effect(() => {
  switch (seconds.value) {
    case 55:
      displayRight.value = DisplayRightType.HITWIN;
      dIndex.value = 10;
      break;
    case 50:
      dIndex.value = 9;
      break;
    case 45:
      dIndex.value = 8;
      break;
    case 40:
      dIndex.value = 7;
      break;
    case 35:
      dIndex.value = 6;
      break;
    case 30:
      dIndex.value = 5;
      break;
    case 25:
      dIndex.value = 4;
      break;
    case 20:
      dIndex.value = 3;
      break;
    case 15:
      dIndex.value = 2;
      break;
    case 10:
      dIndex.value = 1;
      break;
    case 5:
      displayRight.value = DisplayRightType.BALLDRAWN;
      break;
    default:
      break;
  }
});

const gameStatus = signal<GameStatus>(GameStatus.RUNNING);

const animationStatus = signal<AnimationStatus>(AnimationStatus.STOPPED);

export const selectBall = (ballNumber: number) => {
  selectedBall.value = ballNumber;
  index.value = index.value + 1;
  totalBallSelectedCount.value++;
  selectedBalls.value = [...selectedBalls.value, ballNumber];
};

export const emptyBalls = () => {
  totalBallSelectedCount.value = 0;
  selectedBalls.value = [];
  index.value = 0;
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
      if (selectedBalls.value.length === 20) {
        stopGame();
      } else {
        selectBall(selectedNewBalls.value[index.value]);
        showBallAnimation();
      }
    }
  }, 2000);
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

export enum GameEngineRouter {
  GAME = "/game",
  HISTORY = "/history",
}

export const gameEngineRouter = signal<GameEngineRouter>(GameEngineRouter.GAME);

export const GameEngine = () => {
  // SECOND ROUTE
  effect(() => {
    if (timerStatus.value === TimerStatus.TIMEOUT) {
      timerStatus.value = TimerStatus.STOPPED;
      currentRoute.value = "/intro";
      setTimeout(() => {
        currentRoute.value = "/";
        display.value = DisplayType.LIVE;
        tails.value = false;
        heads.value = false;
        equal.value = false;
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
      currentRoute.value = "/history";
      setTimeout(() => {
        currentRoute.value = "/";
        display.value = DisplayType.STAT;
        gameEngineRouter.value = GameEngineRouter.GAME;
      }, 10000);
    }
  });

  // FIRST ROUTE
  effect(() => {
    // if (gameEngineRouter.value === GameEngineRouter.GAME) {
    //   setTimer({
    //     days: 0,
    //     hours: 0,
    //     minutes: 0,
    //     seconds: 10,
    //   });
    //   display.value = DisplayType.STAT;
    //   displayRight.value = DisplayRightType.HITWIN;
    //   startTimer();
    //   nextRoute.value = "#setToLIVE";
    // }
  });

  effect(() => {
    let head = 0;
    let tail = 0;
    if (selectedBalls.value.length > 0) {
      selectedBalls.value.map((num) => {
        if (num < 40) {
          head++;
        } else {
          tail++;
        }
      });
      if (head > tail) {
        heads.value = true;
        tails.value = false;
        equal.value = false;
      } else if (head == tail) {
        equal.value = true;
        heads.value = false;
        tails.value = false;
      } else {
        tails.value = true;
        heads.value = false;
        equal.value = false;
      }
    }
  });
};
