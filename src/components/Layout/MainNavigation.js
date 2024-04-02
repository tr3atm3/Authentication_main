import { Link, useNavigate } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import { useContext } from "react";
import AppContext from "../../context/AppContext";

const MainNavigation = () => {
  const ctx = useContext(AppContext);
  const nav = useNavigate();
  const handleLogoutBtn = () => {
    ctx.removeTokenId();
    nav("/auth");
  };
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/auth">Login</Link>
          </li>
          {ctx.userLoginIdToken && (
            <>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <button onClick={handleLogoutBtn}>Logout</button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
