import React, { useContext } from "react"

import "./App.css"
import Header from "./Components/Header"
import { Outlet, redirect, useHref, useLocation } from "react-router-dom"
import { ThemeContext } from "./contexts/themeContext"

function App() {
  const theme = useContext(ThemeContext)
  return (
    <div className={"App " + theme}>
      <Header />
      <Outlet />
    </div>
  )
}

export default App
