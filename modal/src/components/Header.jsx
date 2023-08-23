import React, { useContext, useEffect } from "react";
import { GlobalState } from "../GlobalState";

const Header = () => {
  const state = useContext(GlobalState);
  const [user, setUser] = state.user;

  useEffect(() => {
    setUser({ ...user, username: "Lida" });
  }, []);

  return (
    <div>
      <h1>{user.username}</h1>
    </div>
  );
};

export default Header;
