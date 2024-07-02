import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";

import { adminPaths } from "./admin.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/admin",
    element: <App></App>,
    children: adminPaths,
  },
  {
    path: "/faculty",
    element: <App></App>,
    children: adminPaths,
  },
  {
    path: "/student",
    element: <App></App>,
    children: adminPaths,
  },

  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
