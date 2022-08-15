import React from "react";
import { Link, useLocation } from "react-router-dom";

const MENU = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Services",
    path: "/services",
  },
  {
    display: "New",
    path: "/new",
  },
  {
    display: "Blog",
    path: "/blog",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

export const Menu = () => {
  const { pathname } = useLocation();

  const menuActive = MENU.findIndex((e) => e.path === pathname);

  return (
    <div className="menu">
      <ul>
        {MENU &&
          MENU.map((item, index) => (
            <li key={index} className={index === menuActive ? "active" : ""}>
              <Link to={item.path}>{item.display}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
