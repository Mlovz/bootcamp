import { createContext, useState } from "react";

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const state = {
    user: [user, setUser],
    posts: [],
  };

  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
