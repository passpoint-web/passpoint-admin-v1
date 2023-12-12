"use client";
import Image from "next/image";
import Logo from "../../../assets/images/admin-logo.png";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import PasswordField from "@/components/forms/PasswordField";
import functions from "@/utils/functions";
import Input from "@/components/forms/Input";
import Link from "next/link";
import Button from "@/components/ui/Button";

const LoginPage = () => {
  const { validEmail } = functions;
  // const {loginUser} = useAuth()
  // eslint-disable-next-line no-unused-vars
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const [ctaClicked, setCtaClicked] = useState(false);
  const [allFieldsValid, setAllFieldsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [feedbackError, setFeedbackError] = useState("");
  const [payload, setPayload] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPayload((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    // setLogout()
    e.preventDefault();
    setCtaClicked(true);
    if (!allFieldsValid) {
      return;
    }
    setIsLoading(true);
    // try {
    //   const response = await login(payload);
    //   const { data, token } = response.data;
    //   saveToken(token);
    //   saveCredentials(data);
    //   directUser(data);
    //   notify("success", `You're logged in as ${payload.email}`);
    // } catch (_err) {
    //   const { message } = _err.response?.data || _err;
    //   console.log(message);
    //   setFeedbackError(message);
    //   notify("error", message);
    // } finally {
    //   setIsLoading(false);
    // }
  };

  useEffect(() => {
    setFeedbackError("");
    const { email, password } = payload;
    const conditionsMet = validEmail(email) && password;
    if (conditionsMet) {
      setAllFieldsValid(true);
    } else {
      setAllFieldsValid(false);
    }
  }, [payload]);

  return (
    <form onSubmit={handleSubmit} className="">
      <article className="text-center font-graphik grid place-items-center">
        <Image src={Logo} alt="logo" width={45.9} height={48} />
        <h1 className="text-4xl text-primary-blue font-bold">Admin Login</h1>
        <p className="text-sm text-primary-grey">
          Kindly create password for your account
        </p>
      </article>
      <section className="mt-10">
        <Input
          label="Email Address"
          id="email-address"
          name="email"
          type="email"
          placeholder="Kelechi@mail.com"
          value={payload.email}
          onChange={handleChange}
          error={ctaClicked && !validEmail(payload.email)}
          errorMsg={
            !payload.email
              ? "Email address is required"
              : !validEmail(payload.email)
              ? "Valid email is required"
              : "Email is required"
          }
        />
        <Input
          label="Password"
          id="password"
          name="password"
          placeholder="Password"
          error={
            (ctaClicked && !payload.password) ||
            feedbackError?.toLowerCase().includes("password")
          }
          errorMsg={
            !payload.password
              ? "Password is required"
              : feedbackError?.toLowerCase().includes("password")
              ? feedbackError
              : "Password is required"
          }
        >
          <PasswordField
            errorField={ctaClicked && !payload.password}
            passwordStrengthNeeded={false}
            emitPassword={(e) =>
              handleChange({
                target: { name: "password", value: e },
              })
            }
          />
        </Input>
        <div className="mt-10">
          <Button
            type="submit"
            text="Log in"
            loading={isLoading}
            variant="secondary"
            size="md"
            // disabled
            className="w-full font-medium rounded-[12px]"
          />
          <p className="text-sm text-center mt-4 text-grey-1 font-graphik [&>a]:text-primary-blue [&>a]:font-medium">
            Forgot password?{" "}
            <Link href="/auth/forgot-password" text="Reset it">
              Reset it
            </Link>
          </p>
        </div>
      </section>
    </form>
  );
};

export default LoginPage;
