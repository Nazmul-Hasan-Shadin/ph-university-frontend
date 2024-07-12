import { Layout, Menu } from "antd";
const { Sider } = Layout;

import { sidebarItemGenerator } from "../../utils/sidebarItem.generator";
import { adminPaths } from "../../routes/admin.routes";
import { facultyPath } from "../../routes/faculty.route";
import { useAppSelector } from "../../redux/hook";
import { selectCurrentUser } from "../../redux/feature/auth/auth.slice";

const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
} 

const SideBar = () => {
  // const role='admin'
 const user= useAppSelector(selectCurrentUser)
 console.log(user);
 
  let sidebarItems;

  switch (user!.role) {
      case  userRole.ADMIN:
     sidebarItems= sidebarItemGenerator(adminPaths,userRole.ADMIN);
        break;

    case userRole.FACULTY:
      sidebarItems = sidebarItemGenerator(facultyPath, userRole.FACULTY);
      break;

      case  userRole.STUDENT:
        sidebarItems=  sidebarItemGenerator(adminPaths,userRole.STUDENT);
           break;

    default:
      break;
  }

  return (
    <Sider
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
