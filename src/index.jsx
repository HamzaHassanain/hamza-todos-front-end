import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  redirect,
} from "react-router-dom";
import Page404 from "./Errors/404";
import Todos from "./Components/Todos";
import User from "./Components/User";
import Auth from "./Components/Auth";
import ThemeContextProvider from "./contexts/themeContext";
import decode from "jwt-decode";

function validate() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  console.log(user);
  if (!user || !user.token) return redirect("/auth/login");
  try {
    const decoded = decode(user.token);
    if (decoded.exp * 1000 < Date.now()) {
      localStorage.removeItem("user");
      localStorage.removeItem("todos");
      return redirect("/auth/login");
    }
  } catch (error) {
    console.error(error);
    return redirect("/auth/login");
  }
}
function validateIfValid() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  if (user && user.token)
    try {
      const decoded = decode(user.token);
      if (decoded.exp * 1000 > Date.now()) {
        return redirect("/");
      }
    } catch (error) {
      console.error(error);
      return redirect("/");
    }
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Page404 />,
    children: [
      {
        path: "/",
        loader: () => validate(),

        element: <Todos />,
      },
      {
        path: "/user",
        loader: () => validate(),
        element: <User />,
      },
      {
        path: "/auth/:state",
        loader: () => validateIfValid(),
        element: <Auth />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeContextProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ThemeContextProvider>
);
