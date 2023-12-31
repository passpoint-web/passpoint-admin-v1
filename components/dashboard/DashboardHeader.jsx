import React from "react";
import HeaderDropDown from "./HeaderDropDown";

const DashboardHeader = ({ user }) => {
  return (
    <div className="h-[85px] bg-primary-white flex justify-end items-center px-5 shadow-[0px_-1px_0px_0px_#EEE_inset]">
      <HeaderDropDown user={user} />
    </div>
  );
};

export default DashboardHeader;
