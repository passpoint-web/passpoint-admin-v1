"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowDown, LogoutIcon } from "@/icons/icon";
import { useRouter } from "next/navigation";
import { setLogout } from "@/services/localService";

const dropData = [
  {
    title: "Log Out",
    image: LogoutIcon,
  },
];

const HeaderDropDown = ({ user }) => {
  const { push } = useRouter();
  const [showSelect, setShowSelect] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setShowSelect((prev) => !prev);
  };

  const handleBodyClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowSelect(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener("mousedown", handleBodyClick);
    // Clean up the event listener

    return () => {
      document.body.removeEventListener("mousedown", handleBodyClick);
    };
  }, []);

  const handleLogout = () => {
    setLogout();
    push("/auth/login");
  };

  const firstLetter = user.firstName ? user.firstName.charAt(0) : "";
  return (
    <>
      <div
        ref={dropdownRef}
        className="bg-primary-3 relative cursor-pointer rounded-[8px] p-[7px_8px] font-graphik"
      >
        <section onClick={toggleDropdown} className="flex items-center gap-2">
          <span className="text-[24px] w-[50px] h-[50px] grid place-items-center leading-normal text-primary-grey p-[6px] rounded-full bg-primary-lightBlue font-extrabold shadow-[1px_-1px_0px_1px_#EEE_inset] uppercase">
            {firstLetter}
          </span>
          <p className="text-[16px] font-medium text-primary-grey">
            {user.firstName}
          </p>
          <i
            className={`transition-[all_0.4s_ease_in] ${
              showSelect && "rotate-180"
            }`}
          >
            <ArrowDown />
          </i>
        </section>
        {showSelect && (
          <section className="h-fit w-full absolute bg-primary-white animate-fadeIn py-5 px-2 rounded-[8px] top-[70px] dropShadow">
            {dropData.map((item, i) => (
              <button
                key={i}
                onClick={() => handleLogout(item)}
                className="w-full flex items-center gap-2 rounded-[4px] text-[14px] text-error-1 font-graphik p-[8px_5px_8px_10px] font-medium transition-g hover:bg-error-2"
              >
                <item.image />
                {item.title}
              </button>
            ))}
          </section>
        )}
      </div>
    </>
  );
};

export default HeaderDropDown;
