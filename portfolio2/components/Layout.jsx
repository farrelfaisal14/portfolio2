import React from "react";
import Sidenavbar from "./Sidenavbar";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Sidenavbar />
        {children}
      </div>
    </>
  );
};

export default Layout;
