import { NavLink } from "react-router-dom";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import { ReactNode } from "react";

type TRoute={
    path:string,
    element:ReactNode
}

type TSidebarItem={
    key:string,
    label:ReactNode,
    children?:TSidebarItem[]
}



const adminPaths2=[
    {
        name:'Dashboard',
        path:'dashboard',
        element:<AdminDashboard/>
    },
    {
        name:"User Management",
        children:[
            {
                name:'Create Admin',
                path:'create-admin',
                element:<CreateAdmin/>
            },
            {
                name:'create-faculty',
                path:'create-faculty',
                element:<CreateFaculty/>
            },
            {
                name:'Create Student',
                path:'create-student',
                element:<AdminDashboard/>
            },
        ]
    }
]


export const adminRoutes= adminPaths2.reduce((acc,items)=>{
    if (items.path && items.element ) {
        acc.push({
           path:items.path,
            element:items.element
        })
    }

    if (items.children) {
        items.children.forEach(child=>{
           acc.push({
               path:child.path,
               element:child.element
           })
        })
    }

    return acc
},[])




export  const adminSideBarItems = adminPaths2.reduce((acc:TSidebarItem[], items) => {
    if (items.path && items.element) {
      acc.push({
        key: items.path,
        label: <NavLink to={`/admin/${items.path}`}>{items.name}</NavLink>
    })
}
    if (items.children) {
      acc.push({
        key: items.name,
        label: items.name,
        children: items.children.map((child) => ({
          key: child.name,
          label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
        })),
      });
    }
  
    return acc;
  }, []);



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