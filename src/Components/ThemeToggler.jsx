import React, { useContext } from "react"
import { ThemeContext, ToggleThemeContext } from "../contexts/themeContext"
import LightButton from "../images/icon-sun.svg"
import DarkButton from "../images/icon-moon.svg"
export default function ThemeToggler() {
  const theme = useContext(ThemeContext)
  const toggleTheme = useContext(ToggleThemeContext)
  return (
    <div className="theme-toggler">
      <img
        src={theme === "light" ? DarkButton : LightButton}
        onClick={(_) => toggleTheme()}
      />
    </div>
  )
}
