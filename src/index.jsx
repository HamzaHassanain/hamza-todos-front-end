import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  redirect,
} from "react-router-dom"
import Page404 from "./Errors/404"
import Todos from "./Components/Todos"
import User from "./Components/User"
import Auth from "./Components/Auth"
import ThemeContextProvider from "./contexts/themeContext"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Page404 />,
    children: [
      {
        path: "/",
        element: <Todos />,
      },
      {
        path: "/user",
        // loader: () => redirect("/"),
        element: <User />,
      },
      {
        path: "/auth/:state",
        // loader: () => redirect("/"),
        element: <Auth />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <ThemeContextProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ThemeContextProvider>
)
