import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./App";
import App from "./App";
import AppContextProvider from "./context/AppContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppContextProvider>
    <RouterProvider router={appRouter}>
      <App />
    </RouterProvider>
  </AppContextProvider>
);
