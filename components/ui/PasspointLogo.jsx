import { Logo } from "@/icons/icon";
import Link from "next/link";
import React from "react";

const PasspointLogo = ({ href, logoClassName }) => {
  return (
    <Link href={href} className="flex items-center w-fit gap-2">
      <Logo className={logoClassName} />
      <span className="py-1 px-2 rounded-[100px] text-[10px] text-primary-white bg-primary-300 font-graphik font-medium leading-normal">
        ADMIN
      </span>
    </Link>
  );
};

export default PasspointLogo;
