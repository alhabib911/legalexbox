import React from "react";
import UserContextComp from "../context/UserContext";
import Sidebar from "../Sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <UserContextComp>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 px-3">{children}</div>
      </div>
    </UserContextComp>
  );
};

export default Layout;
