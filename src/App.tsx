// packages
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// pages
import Home from "./pages/Home";

// layouts
import RootLayout from "./layouts/RootLayout";
import ErrorPage from "./components/ErrorPage";
import GameLayout from "./layouts/GameLayout";
import Game from "./pages/Game";
import { useEffect } from "react";

const tele = window.Telegram.WebApp;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />
      <Route path="/game" element={<GameLayout />} errorElement={<ErrorPage />}>
        <Route index element={<Game />} />
      </Route>
    </Route>,
  ),
);

function App() {
  useEffect(() => {
    tele.ready();
  });
  return <RouterProvider router={router} />;
}

export default App;
