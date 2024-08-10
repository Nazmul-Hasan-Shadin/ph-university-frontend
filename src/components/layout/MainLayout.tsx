import { Button, Layout, Menu, MenuProps } from "antd";
import { Outlet } from "react-router-dom";

import SideBar from "./SideBar";
import { useAppDispatch } from "../../redux/hook";
import { logOut } from "../../redux/feature/auth/auth.slice";

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
  const dispatch = useAppDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <Layout style={{ height: "100%" }}>
      <SideBar />

      {/* ==================content started================ */}
      <Layout>
        <Header style={{ padding: 0 }}>
          {" "}
          <Button onClick={handleLogOut}>LogOut</Button>{" "}
        </Header>
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
