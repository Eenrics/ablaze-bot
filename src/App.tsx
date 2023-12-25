// packages
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// pages
import BlowAnimation from "./pages/BlowAnimation";
import History from "./pages/History";

// layouts
import RootLayout from "./layouts/RootLayout";
import ErrorPage from "./components/ErrorPage";
import GameLayout from "./layouts/GameLayout";
import Game from "./pages/Game";
import React, { useEffect } from "react";
import UpcomingEventsLayout from "./layouts/UpcomingEventsLayout";
import UpcomingEvents from "./pages/UpcomingEvents";
import { GameEngine } from "./services/gameService";
import GameIntroLayout from "./layouts/GameIntroLayout";

const tele = window.Telegram.WebApp;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
      {/* GAME ROUTES */}
      <Route path="/" element={<GameLayout />} errorElement={<ErrorPage />}>
        <Route index element={<Game />} />
        <Route path="/history" element={<History />} />
      </Route>

      {/* INTRO GAME */}
      <Route
        path="/intro"
        element={<GameIntroLayout />}
        errorElement={<ErrorPage />}
      >
        <Route index element={<BlowAnimation />} />
      </Route>

      {/* UPCOMING EVENTS ROUTES */}
      <Route
        path="/upcoming-events"
        element={<UpcomingEventsLayout />}
        errorElement={<ErrorPage />}
      >
        <Route index element={<UpcomingEvents />} />
      </Route>
    </Route>,
  ),
);

function App() {
  useEffect(() => {
    tele.ready();
    GameEngine();
  }, []);

  return (
    <div className="w-screen h-full flex justify-center items-center">
      <React.Suspense
        fallback={
          <div className="flex items-center justify-center h-full w-full">
            <div
              className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            />
          </div>
        }
      >
        <RouterProvider router={router} />
      </React.Suspense>
    </div>
  );
}

export default App;
