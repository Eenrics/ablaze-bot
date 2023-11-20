import { effect, signal } from "@preact/signals-react";
import { currentRoute, nextRoute } from "./routeService";
import { display, DisplayType } from "../utils/displayGameSignal";
import {
  TimerStatus,
  setTimer,
  startTimer,
  timerStatus,
} from "./timeCounterService";

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

export const GameEngine = () => {
  // SECOND ROUTE
  effect(() => {
    if (timerStatus.value === TimerStatus.TIMEOUT) {
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
