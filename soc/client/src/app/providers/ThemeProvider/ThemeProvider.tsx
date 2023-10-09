import React, { FC, ReactNode, createContext, useEffect, useMemo, useState } from 'react'
import { Theme } from '../../../shared/consts/theme'
import { LOCAL_STORAGE_THEME_KEY } from '../../../shared/consts/localstorage';

interface ThemeProviderProps{
    children: ReactNode
    initialTheme?: Theme
}


export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

const fallbackTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;

const ThemeProvider:FC<ThemeProviderProps> = ({children, initialTheme}) => {
    const [theme, setTheme] = useState<Theme>(
        initialTheme || fallbackTheme || Theme.LIGHT,
    )
    
    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
    }, [theme]);
    

    const defaultThemeState = useMemo(() => ({theme, setTheme}),[theme])

    
  return (
    <ThemeContext.Provider value={defaultThemeState}>{children}</ThemeContext.Provider>
  )
}


export default ThemeProvider
