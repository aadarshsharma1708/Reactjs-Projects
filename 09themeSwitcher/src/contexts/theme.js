import { createContext, useContext } from "react";

export const ThemeContext = createContext({  // Context to manage theme state
    themeMode : 'light',
    darkTheme : () => {},
    lightTheme : () => {},
});

export const ThemeProvider = ThemeContext.Provider; // Context provider for the ThemeContext

export default function useTheme() { // Custom hook to use the ThemeContext
    return useContext(ThemeContext);
}