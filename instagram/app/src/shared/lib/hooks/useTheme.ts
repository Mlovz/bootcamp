import { ThemeContext } from "@/app/providers/ThemeProvider/ThemeProvider";
import { Theme } from "@/shared/consts/theme";
import { useContext } from "react";

interface IUseTheme {
  theme: Theme;
  toogleTheme: () => void;
}

export const useTheme = (): IUseTheme => {
  const { theme, setTheme } = useContext(ThemeContext);

  console.log(theme);

  const toogleTheme = () => {
    let newTheme: Theme;
    switch (theme) {
      case Theme.DARK:
        newTheme = Theme.LIGHT;
        break;
      case Theme.LIGHT:
        newTheme = Theme.DARK;
        break;

      default:
        newTheme = Theme.LIGHT;
    }
    setTheme?.(newTheme);
  };

  return {
    theme,
    toogleTheme,
  };
};
