import React, { useContext } from "react"
import { Link } from "react-router-dom"
import ThemeToggler from "./ThemeToggler"
export default function Header() {
  // console.log(theme)
  return (
    <header>
      <div className="container">
        {/* <nav>
          <div></div>
          <Link to={"/user"} className="user-link btn">
            User
          </Link>
        </nav> */}
        <div className="todo-header-container">
          <h1>Todo</h1>
          <ThemeToggler />
        </div>
      </div>
    </header>
  )
}
