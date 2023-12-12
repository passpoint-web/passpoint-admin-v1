"use client";
import Image from "next/image";
import Logo from "../../../assets/images/admin-logo.png";
import Input from "@/components/forms/Input";
import { useRouter } from "next/navigation";
import { useState } from "react";
import functions from "@/utils/functions";
import Button from "@/components/ui/Button";
import Links from "@/components/ui/Links";

const ForgotPassword = () => {
  const { push } = useRouter();
  const { validEmail } = functions;
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [ctaClicked, setCtaClicked] = useState(false);

  //   const notify = useNotify();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleForgotPasswordSubmit = async (e) => {
    e.preventDefault();
    setCtaClicked(true);
    if (!validEmail(email)) {
      return;
    }
    setIsLoading(true);
    // try {
    //   const response = await forgotPassword({ email });
    //   const { message } = response.data;
    //   notify("success", message);
    //   saveForgotPasswordEmail(email);
    //   push("/auth/forgot-password/verify");
    // } catch (_err) {
    //   const { message } = _err.response?.data || _err;
    //   notify("error", message);
    // } finally {
    //   setIsLoading(false);
    // }
  };

  return (
    <form onSubmit={handleForgotPasswordSubmit}>
      <article className="text-center font-graphik grid place-items-center">
        <Image src={Logo} alt="logo" width={45.9} height={48} />
        <h1 className="text-4xl text-primary-blue font-bold">
          Admin Reset Password
        </h1>
        <p className="text-sm text-primary-grey">
          Kindly enter your assigned email
        </p>
      </article>
      <section className="mt-10">
        <Input
          label="Email Address"
          id="email-address"
          name="email"
          placeholder="john@mail.com"
          value={email}
          onChange={handleEmailChange}
          error={ctaClicked && !validEmail(email)}
          errorMsg={
            !email
              ? "Email address is required"
              : !validEmail(email)
              ? "Valid email is required"
              : "Email is required"
          }
        />
        <div className="grid gap-4">
          <Button
            type="submit"
            text="Reset"
            loading={isLoading}
            variant="secondary"
            size="md"
            className="w-full font-medium rounded-[12px]"
          />
          <Links
            href="/auth/login"
            text="Go Back"
            variant="outlined"
            size="md"
            className="w-full font-medium rounded-[12px]"
          />
        </div>
      </section>
    </form>
  );
};

export default ForgotPassword;
