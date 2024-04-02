import { Fragment, useContext } from "react";

import MainNavigation from "./MainNavigation";
import { Outlet, useNavigate } from "react-router-dom";
import AppContext from "../../context/AppContext";

const Layout = () => {
  // const nav = useNavigate();
  // const ctx = useContext(AppContext);
  return (
    <Fragment>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
};

export default Layout;
