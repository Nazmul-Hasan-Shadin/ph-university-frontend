import { Layout, Menu } from "antd";
const { Sider } = Layout;

import { sidebarItemGenerator } from "../../utils/sidebarItem.generator";
import { adminPaths } from "../../routes/admin.routes";
import { facultyPath } from "../../routes/faculty.route";
import { useAppSelector } from "../../redux/hook";
import {
  TUser,
  selectCurrentUser,
  useCurrentToken,
} from "../../redux/feature/auth/auth.slice";
import { studentPaths } from "../../routes/student.routes";
import { verifyToken } from "../../utils/verifyToken";


const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};

const SideBar = () => {
  // const role='admin'
  const token = useAppSelector(useCurrentToken);
  let user;
  console.log(user);

  if (token) {
    user = verifyToken(token);
  }

  let sidebarItems;

  switch ((user as TUser).role) {
    case userRole.ADMIN:
      sidebarItems = sidebarItemGenerator(adminPaths, userRole.ADMIN);
      break;

    case userRole.FACULTY:
      sidebarItems = sidebarItemGenerator(facultyPath, userRole.FACULTY);
      break;

    case userRole.STUDENT:
      sidebarItems = sidebarItemGenerator(studentPaths, userRole.STUDENT);
      break;

    default:
      break;
  }

  return (
    <Sider
      style={{ height: "100vh", position: "sticky", top: "0", left: "0" }}
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div style={{ color: "white", textAlign: "center" }}>
        <h1> ph university</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default SideBar;
