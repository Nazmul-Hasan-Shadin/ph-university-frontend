import FacultyDashboard from "../pages/faculty/FacultyDashboard";
import MyCourses from "../pages/faculty/MyCourses";
import OfferedCourse from "../pages/faculty/MyCourses";

export const facultyPath=[
    {
        name:'Dashboard',
        path:'dashboard',
        element:<FacultyDashboard></FacultyDashboard>
    },
    {
        name:'My  Courses',
        path:'enrolled-course',
        element:<MyCourses/>
    }
]