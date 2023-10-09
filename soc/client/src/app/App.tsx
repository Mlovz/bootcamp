import { Navbar } from "@/widgets";
import AppRouter from "./providers/RouteProvider/ui/AppRouter";
import { Suspense } from "react";
import GradientLoader from "@/widgets/GradientLoader/ui/GradientLoader";

const App = () => {
  const auth = false;

  return (
    <div className="app">
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
