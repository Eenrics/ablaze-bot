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
import { useEffect } from "react";
import UpcomingEventsLayout from "./layouts/UpcomingEventsLayout";
import UpcomingEvents from "./pages/UpcomingEvents";
import { GameEngine } from "./services/gameService";

const tele = window.Telegram.WebApp;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
      {/* GAME ROUTES */}
      <Route path="/" element={<GameLayout />} errorElement={<ErrorPage />}>
        <Route index element={<Game />} />
        <Route path="/intro" element={<BlowAnimation />} />
        <Route path="/history" element={<History />} />
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

  return <RouterProvider router={router} />;
}

export default App;
