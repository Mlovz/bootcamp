import { Footer, Navbar } from "@/widgets";
import { AppRouter } from "./providers";
import { Button, Text } from "@/shared/ui";
import { useDispatch } from "react-redux";
import { authActions } from "@/features/Auth/model/slice/authSlice";

const App = () => {
  const auth = false;

  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(authActions.setAuthData({ name: "User", age: 20 }));
    dispatch(authActions.setAuthLoading(true));
  };

  return (
    <div>
      {auth && <Navbar />}

      <button onClick={onClick}>Click</button>

      <div className="container">
        <AppRouter />
      </div>

      <Footer />
    </div>
  );
};

export default App;
