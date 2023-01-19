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
  const logedIn = localStorage.getItem("user");
  return (
    <header>
      <div className="container">
        <nav>
          <div></div>
          {logedIn ? (
            <div>
              <button className="button signout" onClick={handleSignout}>
                Sign Out
              </button>
              {/* <Link to={"/user"} className="user-link">
              User
            </Link> */}
            </div>
          ) : (
            <div>
              <Link to="/auth/login" className="button ">
                Log In
              </Link>
              <Link to="/auth/signup" className="button ">
                Sign Up
              </Link>
            </div>
          )}
        </nav>
        <div className="todo-header-container">
          <h1>Todo</h1>
          <ThemeToggler />
        </div>
      </div>
    </header>
  );
}
