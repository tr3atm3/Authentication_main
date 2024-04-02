import { createContext } from "react";

const AppContext = createContext({
  userLoginIdToken: null,
  addTokenId: (id) => {},
  removeTokenId: () => {},
});

export default AppContext;
