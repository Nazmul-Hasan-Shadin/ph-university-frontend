import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Login from "../pages/Login";
import { routeGenerator } from "../utils/routes.generator";
import { adminPaths } from "./admin.routes";
import { facultyPath } from "./faculty.route";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/admin",
    element: <App></App>,
    children: routeGenerator(adminPaths),
  },
  {
    path: "/faculty",
    element: <App></App>,
    children: routeGenerator(facultyPath),
  },
  {
    path: "/student",
    element: <App></App>,
    children: routeGenerator(adminPaths),
  },

  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
