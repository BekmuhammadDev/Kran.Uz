import React from "react";
import Header from "../../components/layouts/header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="bg-[#191919]">
      <Header />
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
