import { useReducer } from "react";
import AppContext from "./AppContext";

const defaultState = {
  userLoginIdToken: localStorage.getItem("tokenId"),
};

const reducerFunc = (state, action) => {
  if (action.type === "ADDID") {
    return {
      ...state,
      userLoginIdToken: action.value,
    };
  }
  if (action.type === "REMOVEID") {
    return {
      ...state,
      userLoginIdToken: null,
    };
  }

  return defaultState;
};

const AppContextProvider = (props) => {
  const [allStates, dispatch] = useReducer(reducerFunc, defaultState);

  const addTokenId = (id) => {
    dispatch({
      type: "ADDID",
      value: id,
    });
    localStorage.setItem("tokenId", id);
  };

  const removeTokenId = () => {
    dispatch({
      type: "REMOVEID",
    });
    localStorage.removeItem("tokenId");
  };

  const contextValue = {
    userLoginIdToken: allStates.userLoginIdToken,
    addTokenId: addTokenId,
    removeTokenId: removeTokenId,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
