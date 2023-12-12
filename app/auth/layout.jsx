"use client";
import Header from "@/components/auth/Header";
import Button from "@/components/ui/Button";
import { BackArrow } from "@/icons/icon";


const AuthLayout = ({ children, backLink }) => {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="w-[90%] mx-auto pt-5">
        {backLink && (
          <Button
            text="Back"
            type="button"
            variant="outlined"
            size="md"
            icon
            leftIcon={<BackArrow />}
          />
        )}
        <section
          className={`flex justify-center ${backLink ? "mt-1" : "mt-10"}`}
        >
          <div className="w-[450px] max-w-[450px]">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default AuthLayout;
