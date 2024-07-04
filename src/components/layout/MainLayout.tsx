import { Layout, Menu, MenuProps } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import { sidebarItemGenerator } from "../../utils/sidebarItem.generator";
import { adminPaths } from "../../routes/admin.routes";
import SideBar from "./SideBar";

const { Header, Content, Footer, Sider } = Layout;

//  const items:MenuProps['items']=[
//     {
//         key:'Dashboard',
//         label:<NavLink to={'/admin/dashboard'}>Dashboard</NavLink>,
//     },

//     {
//         key:'User-Management',
//         label:"user Management",
//         children: [
//             {
//                 key:'1',
//                 label: <NavLink to={'/admin/create-admin'}>create admin</NavLink>
//             },
//             {
//                 key:'2',
//                 label: <NavLink to={'/admin/create-student'}>create student</NavLink>
//             },
//             {
//                 key:'3',
//                 label: <NavLink to={'/admin/create-faculty'}>create faculty</NavLink>
//             },
//         ]
//     },
//  ]

const MainLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <SideBar />

      {/* ==================content started================ */}
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
