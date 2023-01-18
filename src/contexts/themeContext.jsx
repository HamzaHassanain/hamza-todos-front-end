import React from "react"

export const ThemeContext = React.createContext("light")
export const ToggleThemeContext = React.createContext()

export default function ThemeContextProvider({ children }) {
  const localStorageData = localStorage.getItem("theme")

  const [theme, setTheme] = React.useState(
    !localStorageData ? "light" : JSON.parse(localStorageData)
  )
  function toggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light"
    localStorage.setItem("theme", JSON.stringify(newTheme))
    setTheme(newTheme)
  }
  return (
    <ThemeContext.Provider value={theme}>
      <ToggleThemeContext.Provider value={toggleTheme}>
        {children}
      </ToggleThemeContext.Provider>
    </ThemeContext.Provider>
  )
}
