import { ReactNode } from "react";
import { Provider } from "react-redux";
import { createStore } from "../config/store";

interface StoreProviderProps {
  children?: ReactNode;
}

export const StoreProvider = (props: StoreProviderProps) => {
  const store = createStore();

  return <Provider store={store}>{props.children}</Provider>;
};
