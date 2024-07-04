import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { TUserPath } from '../types';

type TSidebarItem={
    key:string,
    label:ReactNode,
    children?:TSidebarItem[]
}
export const sidebarItemGenerator=(itmes:TUserPath[],role)=>{
      const adminSideBarItems = itmes.reduce((acc:TSidebarItem[], items) => {
            if (items.path && items.element) {
              acc.push({
                key: items.path,
                label: <NavLink to={`/${role}/${items.path}`}>{items.name}</NavLink>
            })
        }
            if (items.children) {
              acc.push({
                key: items.name,
                label: items.name,
                children: items.children.map((child) => ({
                  key: child.name,
                  label: <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>,
                })),
              });
            }
          
            return acc;
          }, []);

          return adminSideBarItems
}