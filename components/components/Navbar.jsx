/* eslint-disable @next/next/no-img-element */

"use client";
import "../../assets/styles/old-admin.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const getPageTitle = (pathname) => {
    if (pathname.includes("user") || pathname.includes("kyc")) {
      return "Users & KYC";
    } else if (pathname.includes("settings")) {
      return "Settings";
    }
    return "Untitled";
  };
  return (
    <div className="px-12 z-50 font-graphik flex justify-between items-center borderColor border sticky top-0 right-0 left-0 w-[100%] h-[80px] bg-primary-white">
      <div>
        <h1 className="text-xl font-semibold">{getPageTitle(usePathname())}</h1>
      </div>
      <div className="flex items-center space-x-4">
        <img
          src="https://avatars.githubusercontent.com/u/46944485?v=4"
          alt="User Profile"
          className="w-[40px] h-[40px] rounded-full bg-grey-1"
        />
        <button className="bg-grey-1 px-4 py-2 text-primary-white rounded-xl">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Navbar;
