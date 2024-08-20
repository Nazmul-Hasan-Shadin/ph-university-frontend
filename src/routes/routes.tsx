import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Login from "../pages/Login";
import { routeGenerator } from "../utils/routes.generator";
import { adminPaths } from "./admin.routes";
import { facultyPath } from "./faculty.route";
import ProtectedRoute from "../components/layout/ProtectedRoute";
import { studentPaths } from "./student.routes";
import ChangePassword from "../pages/student/ChangePassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/admin",
    element:  <ProtectedRoute role='admin'><App/></ProtectedRoute>,
    children: routeGenerator(adminPaths),
  },
  {
    path: "/faculty",
    element: <App></App>,
    children: routeGenerator(facultyPath),
  },
  {
    path: "/student",
    element: <ProtectedRoute role='student'><App></App></ProtectedRoute>,
    children: routeGenerator(studentPaths),
  },
  {
    path: "/change-password",
    element:<ChangePassword/>,
   
  },

  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
