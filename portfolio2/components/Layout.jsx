import React from "react";
import Sidenavbar from "./Sidenavbar";

const Layout = ({ children }) => {
  return (
    <>
      <Sidenavbar />
      {children}
    </>
  );
};

export default Layout;