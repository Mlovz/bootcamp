import { Navbar } from "@/widgets";
import AppRouter from "./providers/RouteProvider/ui/AppRouter";
import { Suspense, useEffect } from "react";
import { useAppDispatch } from "@/shared/lib/useAppDispatch/useAppDispatch";
import { getAuthData, refreshToken } from "@/entities/User";
import { useSelector } from "react-redux";
import { useTheme } from "@/shared/lib/hooks/useTheme";

const App = () => {
  const dispatch = useAppDispatch();
  const auth = useSelector(getAuthData);
  const { theme } = useTheme();

  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);

  return (
    <div className={`app ${theme}`}>
      {auth && <Navbar />}
      {/* <GradientLoader /> */}

      <div className="container">
        <Suspense fallback={<h1>Loading....</h1>}>
          <AppRouter />
        </Suspense>
      </div>
    </div>
  );
};

export default App;
