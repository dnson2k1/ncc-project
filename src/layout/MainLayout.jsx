import React from "react";
import Footer from "./Footer";
import { Menu } from "./Menu";

import "./layout.scss";

const MainLayout = ({ children }) => {
  return (
    <div className="layout">
      <Menu />
      <div className="content">
        {children}
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default MainLayout;
