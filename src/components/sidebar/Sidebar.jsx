import React from "react";
import { SiedBar } from "./Sidebar.style";
import { Link ,useLocation } from "react-router-dom";
export default function Slidbar({ getRoot }) {
  const {pathname}=useLocation()
  return (
    <SiedBar>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <ul className="sidebarList">
            {getRoot.map((menu) => {
              if (menu.type === "title") {
                return <h3 className="sidebarTitle">{menu.name}</h3>;
              }
              if (menu.type === "route") {
                return (
                  <Link to={menu.route} className="link">
                    <li className={`sidebarListItem ${(menu.route === pathname?"sidebar-active":"")}`}>
                      {menu.icon}
                      {menu.name}
                    </li>
                  </Link>
                );
              }
              if (menu.type === "item") {
                return<li className="sidebarListItem">
                  {menu.icon}
                  {menu.name}
                </li>;
              }
            })}
          </ul>
        </div>
      </div>
    </SiedBar>
  );
}
