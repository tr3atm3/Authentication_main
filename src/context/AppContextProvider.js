import { useReducer, useState } from "react";
import AppContext from "./AppContext";

const defaultState = {
  userLoginIdToken: null,
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

  useState(() => {
    console.log(allStates);
  });
  const addTokenId = (id) => {
    dispatch({
      type: "ADDID",
      value: id,
    });
  };

  const removeTokenId = () => {
    dispatch({
      type: "REMOVEID",
    });
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
