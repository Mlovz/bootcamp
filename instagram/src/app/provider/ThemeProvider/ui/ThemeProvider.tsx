import { Theme } from "@/shared/consts/theme";
import {
  FC,
  ReactNode,
  createContext,
  useEffect,
  useMemo,
  useState,
} from "react";

interface IThemeContext {
  children: ReactNode;
}

interface IThemeValues {
  theme?: Theme;
  setTheme?: () => void;
}

export const ThemeContext = createContext<any>({});

export const ThemeProvider: FC<IThemeContext> = ({ children }) => {
  const fallbackTheme = localStorage.getItem("theme");

  const initialState = fallbackTheme || Theme.LIGHT;

  const [theme, setTheme] = useState(initialState);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const defaultTheme = useMemo(() => {
    return {
      theme,
      setTheme,
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};
