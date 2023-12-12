import Links from "@/components/ui/Links";
import { SuccessIconBig } from "@/icons/icon";
import React from "react";

const ResetSuccessful = () => {
  return (
    <div className="flex flex-col items-center">
      <SuccessIconBig />
      <article className="m-[10px_0_24px] font-graphik text-center">
        <h2 className="text-2xl text-grey-1 font-medium tracking-[-0.5px]">
          Password Reset Successful
        </h2>
        <p className="text-grey-3 ">
          Your password reset was successful you can now proceed to login.
        </p>
      </article>
      <Links
        href="/auth/login"
        text="Go to Login"
        variant="secondary"
        size="md"
        className="w-full font-medium rounded-[12px]"
      />
    </div>
  );
};

export default ResetSuccessful;
