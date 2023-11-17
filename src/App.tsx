// packages
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import i18n from "i18next";

// pages
import Home from "./pages/Home";

// layouts
import RootLayout from "./layouts/RootLayout";
import ErrorPage from "./components/ErrorPage";
import GameLayout from "./layouts/GameLayout";
import Game from "./pages/Game";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
  resources: {
    en: {
      translation: {
        "Welcome to React": "Welcome to React and react-i18next",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

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
  return <RouterProvider router={router} />;
}

export default App;
