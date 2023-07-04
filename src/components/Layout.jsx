import React from "react";
import LayoutNav from "./LayoutNav";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <LayoutNav />
      <div className="flex mt-6 min-h-screen">
        <div className="w-1/6">
          <Sidebar />
        </div>
        <div className="flex-1 bg-gray-100">
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
