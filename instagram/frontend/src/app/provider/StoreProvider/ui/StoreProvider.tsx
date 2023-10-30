import { Provider } from "react-redux";
import { createStore } from "../config/store";
import { ReactNode, FC } from "react";

interface StoreProvider {
  children: ReactNode;
}

export const StoreProvider: FC<StoreProvider> = ({ children }) => {
  const store = createStore();

  return <Provider store={store}>{children}</Provider>;
};
