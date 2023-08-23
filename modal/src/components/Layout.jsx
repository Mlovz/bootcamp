import React, { useContext, useEffect } from "react";
import { GlobalState } from "../GlobalState";

const Layout = () => {
  const state = useContext(GlobalState);

  const [user, setUser] = state.user;

  useEffect(() => {
    setUser({ ...user, age: 55, username: "Lida" });
  }, []);

  return <div>{user.age}</div>;
};

export default Layout;
