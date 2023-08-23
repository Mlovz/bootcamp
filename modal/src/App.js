import { DataProvider } from "./GlobalState";
import Header from "./components/Header";
import Layout from "./components/Layout";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Header />

        <Layout />
      </div>
    </DataProvider>
  );
}

export default App;
