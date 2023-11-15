import { useSelector } from "react-redux";
import { getAuthToken, getFetchAuthUser } from "@/entities/User";
import { LOCAL_STORAGE_TOKEN } from "@/shared/consts/localstorage";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { Suspense, useEffect } from "react";
import { Navbar, PageLoader } from "../widgets";
import { RouteProvider } from "./provider";
import { Link } from "react-router-dom";

const App = () => {
  const isLogged = useSelector(getAuthToken);
  const dispatch = useAppDispatch();
  const token = localStorage.getItem(LOCAL_STORAGE_TOKEN);

  useEffect(() => {
    if (token) {
      dispatch(getFetchAuthUser());
    }
  }, [dispatch]);

  const componentDidMount = () => {};
  const componentDidUpdate = () => {};
  const componentWillUnmount = () => {};

  useEffect(() => {
    // componentDidMount
    console.log(123);

    // const componentWillUnmount = () => {};
    return () => {};

    // const componentDidUpdate = () => {};
  }, [token]);

  return (
    <div className="app">
      <Suspense fallback="">
        {isLogged && <Navbar />}

        <Link to="/login">Login</Link>
        <Link to="/register">register</Link>

        <PageLoader />
        <div className="container">
          <RouteProvider />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
