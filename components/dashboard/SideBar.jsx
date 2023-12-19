"use client";
import PasspointLogo from "../ui/PasspointLogo";
import { sideBarData } from "@/constants/generalData";
import { Logo2 } from "@/icons/icon";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const pathname = usePathname();

  return (
    <div className="w-[202px] h-screen bg-secondary-1 p-[40px_0px_24px_24px] flex flex-col gap-y-6 overflow-y-auto scrollbar justify-between">
      <section>
        <Link href="/dashboard">
          <Logo2 />
        </Link>
        <nav className="w-full mt-10 grid gap-6 -mr-10">
          {sideBarData.map((item, i) => (
            <Link
              href={item.path}
              key={i}
              className={`w-full relative text-[16px] flex gap-3 items-center p-[10px] rounded-lg font-graphik text-grey-6 after:contents-[""] after:w-0 after:h-full after:bg-primary-black after:absolute after:-right-5 after:z-[100] ${
                pathname === item.path &&
                "bg-primary-blue text-primary-white font-bold"
              }`}
            >
              {/* {pathname === item.path && (
                <small className="absolute block -top-5 -right-10 z-30 mr-4 w-8 h-8 bg-primary-black transform origin-bottom-right"></small>
              )} */}
              <item.icon
                className={pathname === item.path ? "strokeFill" : ""}
              />
              <span>{item.title}</span>
            </Link>
          ))}
        </nav>
      </section>
    </div>
  );
};

export default SideBar;
