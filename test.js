const adminPath2 = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: "admindashboard",
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: "createadmin",
      },
      {
        name: "create-faculty",
        path: "create-faculty",
        element: "createfaculty",
      },
      {
        name: "Create Student",
        path: "create-student",
        element: "admin bal",
      },
    ],
  },
];

const newArray = adminPath2.reduce((acc, items) => {
  if (items.path && items.element) {
    acc.push({
      key: items.path,
      label: "NAVLINK",
    });
  }

  if (items.children) {
    acc.push({
      key: items.name,
      label: items.name,
      children: items.children.map((child) => ({
        key: child.name,
        label: "NAVLINK",
      })),
    });
  }

  return acc;
}, []);

console.log(JSON.stringify(newArray));

//  const newArray= adminPath2.reduce((acc,items)=>{
//      if (items.path && items.element ) {
//          acc.push({
//             path:items.path,
//              element:items.element
//          })
//      }

//      if (items.children) {
//          items.children.forEach(child=>{
//             acc.push({
//                 path:child.path,
//                 element:child.element
//             })
//          })
//      }

//      return acc
//  },[])

//  console.log(newArray);
