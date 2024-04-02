import { Outlet, createBrowserRouter } from "react-router-dom";

// import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";

import Layout from "./components/Layout/Layout";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/auth",
        element: <AuthPage />,
      },
      {
        path: "/profile",
        element: <UserProfile />,
      },
    ],
  },
]);
const App = () => {
  return (
    <div>
      <Layout />
    </div>
  );
};

export default App;
