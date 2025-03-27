import React from "react";
import Header from "../../components/layouts/header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
