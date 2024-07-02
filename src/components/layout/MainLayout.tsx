import { Layout, Menu, MenuProps } from "antd";
import { NavLink, Outlet } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;


 const items:MenuProps['items']=[
    {
        key:'Dashboard',
        label:<NavLink to={'/admin/dashboard'}>Dashboard</NavLink>,
    },

    {
        key:'User-Management',
        label:"user Management",
        children:[
            {
                key:'1',
                label: <NavLink to={'/admin/create-admin'}>create admin</NavLink>
            },
            {
                key:'2',
                label: <NavLink to={'/admin/create-student'}>create student</NavLink>
            },
            {
                key:'3',
                label: <NavLink to={'/admin/create-faculty'}>create faculty</NavLink>
            },
        ]
    },
 ]

const MainLayout = () => {
  return (
    <Layout style={{height:'100vh'}}>
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
        <div style={{color:'white', textAlign:"center" }} >
         <h1> ph university</h1>
           </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
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
            <Outlet/>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
