import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import "./i18n";
import { Provider } from "jotai";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider>
    {/* <React.StrictMode> */}
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
    {/* </React.StrictMode> */}
  </Provider>,
);
