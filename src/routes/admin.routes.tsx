import { NavLink } from "react-router-dom";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import AcademicManagement from "../pages/admin/academicManagement/AcademicSemester";
import AcademicSemester from "../pages/admin/academicManagement/AcademicSemester";
import CreateAcademicSemester from "../pages/admin/academicManagement/CreateAcademicSemester";
import CreateAcademicFaculty from "../pages/admin/academicManagement/CreateAcademicFaculty";
import AcademicFaculty from "../pages/admin/academicManagement/AcademicFaculty";
import CreateAcademicDepartment from "../pages/admin/academicManagement/CreateAcademicDepartment";
import AcademicDepartment from "../pages/admin/academicManagement/AcademicDepartment";
import CreateStudent from "../pages/admin/userManagement/CreateStudent";
import StudentData from "../pages/admin/userManagement/StudentData.tables";
import StudentDetails from "../pages/admin/userManagement/StudentDetails";
import SemesterRegistration from "../pages/admin/courseManagement/SemesterRegistration";
import RegisteredSemester from "../pages/admin/courseManagement/RegisteredSemester";
import Courses from "../pages/admin/courseManagement/Courses";

import CreateCourse from "../pages/admin/courseManagement/CreateCourse";
import OfferedCourse from "../pages/admin/courseManagement/OfferedCourse";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "Academic management",
    children: [
      {
        name: "Create A. Semester",
        path: "create-academic-semester",
        element: <CreateAcademicSemester />,
      },
      {
        name: " Academic Semester",
        path: "academic-semester",
        element: <AcademicSemester></AcademicSemester>,
      },
      {
        name: "Create A. Faculty",
        path: "create-academic-faculty",
        element: <CreateAcademicFaculty />,
      },
      {
        name: " Academic Faculty ",
        path: "academic-faculty",
        element: <AcademicFaculty />,
      },
      {
        name: "Create A. Department",
        path: "create-academic-department",
        element: <CreateAcademicDepartment />,
      },
      {
        name: " Academic Department ",
        path: "academic-departement",
        element: <AcademicDepartment />,
      },
    ],
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
      {
        name: "Students",
        path: "student-data",
        element: <StudentData />,
      },
      {
        path: "student-data/:studentId",
        element: <StudentDetails />,
      },
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "create-faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
    ],
  },

  {
    name: "Course Management",
    children: [
      {
        name: "Semester Registration",
        path: "semester-registration",
        element:<SemesterRegistration/>
      },
      {
        name: "Regestered Semesters",
        path: "registered-semesters",
        element:<RegisteredSemester/>
      },
      {
        name: "Create Course",
        path: "create-course",
        element:<CreateCourse/>
      },
      {
        name: "Courses",
        path: "courses",
        element:<Courses/>
      },
      {
        name: "Offer Course",
        path: "offer-course",
        element:<OfferedCourse/>
      },

    ],
  },
];

// export const adminRoutes= adminPaths2.reduce((acc:TRoute[],items)=>{
//     if (items.path && items.element ) {
//         acc.push({
//            path:items.path,
//             element:items.element
//         })
//     }

//     if (items.children) {
//         items.children.forEach(child=>{
//            acc.push({
//                path:child.path,
//                element:child.element
//            })
//         })
//     }

//     return acc
// },[])

// export  const adminSideBarItems = adminPaths.reduce((acc:TSidebarItem[], items) => {
//     if (items.path && items.element) {
//       acc.push({
//         key: items.path,
//         label: <NavLink to={`/admin/${items.path}`}>{items.name}</NavLink>
//     })
// }
//     if (items.children) {
//       acc.push({
//         key: items.name,
//         label: items.name,
//         children: items.children.map((child) => ({
//           key: child.name,
//           label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
//         })),
//       });
//     }

//     return acc;
//   }, []);

// export const adminPaths=[
//     {
//       path:'dashboard',
//       element: <AdminDashboard/>
//     },
//     {
//       path: "create-student",
//       element: <CreateStudent/>
//     },
//     {
//       path: "create-admin",
//       element: <CreateAdmin/>
//     },
//     {
//       path: "create-faculty",
//       element: <CreateFaculty/>
//     },
//   ]
