import { useContext, useRef } from "react";
import classes from "./ProfileForm.module.css";
import AppContext from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

const ProfileForm = () => {
  const newPasswordRef = useRef(null);
  const ctx = useContext(AppContext);

  const nav = useNavigate();

  // if (ctx.userLoginIdToken === null) {
  //   nav("/auth");
  // }
  const submitHandler = (e) => {
    e.preventDefault();

    const enteredNewPassword = newPasswordRef.current.value;
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyC7sVHD3PsWo_Lma3A_MJKwkcCo-BjiFm8",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: ctx.userLoginIdToken,
          password: enteredNewPassword,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      // assumption : always succeeds
    });

    newPasswordRef.current.value = null;
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          minLength="7"
          ref={newPasswordRef}
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
