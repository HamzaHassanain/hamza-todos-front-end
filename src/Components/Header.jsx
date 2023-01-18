import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import ThemeToggler from "./ThemeToggler";
export default function Header() {
  const navigate = useNavigate();
  function handleSignout() {
    localStorage.removeItem("user");
    localStorage.removeItem("todos");
    navigate("/auth/login");
  }
  return (
    <header>
      <div className="container">
        <nav>
          <div></div>
          <div>
            <button className="button signout" onClick={handleSignout}>
              Sign Out
            </button>
            {/* <Link to={"/user"} className="user-link">
              User
            </Link> */}
          </div>
        </nav>
        <div className="todo-header-container">
          <h1>Todo</h1>
          <ThemeToggler />
        </div>
      </div>
    </header>
  );
}
