"use client";
import Image from "next/image";
import Logo from "../../../../assets/images/admin-logo.png";
import PasswordField from "@/components/forms/PasswordField";
import Input from "@/components/forms/Input";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";

const ResetPassword = () => {
  const { push, back } = useRouter();
  //   const email = getForgotPasswordEmail();
  const [passwordFieldsValid, setPasswordFieldsValid] = useState(false);
  const [payload, setPayload] = useState({
    password: "",
    confirm: "",
    // email,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPayload((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [isLoading, setIsLoading] = useState(false);
  const [ctaClicked, setCtaClicked] = useState(false);

  //   const notify = useNotify();

  const handleResetPasswordSubmit = async (e) => {
    e.preventDefault();
    setCtaClicked(true);
    if (!passwordFieldsValid) {
      return;
    }
    setIsLoading(true);
    // try {
    //   const response = await authenticate.resetPassword(payload);
    //   const { message } = response.data;
    //   notify("success", message);
    //   saveForgotPasswordEmail("");
    //   push("/auth/login");
    // } catch (_err) {
    //   const { message } = _err.response?.data || _err;
    //   notify("error", message);
    // } finally {
    //   setIsLoading(false);
    // }
  };

  useEffect(() => {
    const { password, confirm } = payload;
    if (password && password === confirm) {
      setPasswordFieldsValid(true);
    } else {
      setPasswordFieldsValid(false);
    }
  }, [payload.password, payload.confirm]);

  return (
    <form onSubmit={handleResetPasswordSubmit}>
      <article className="text-center font-graphik grid place-items-center">
        <Image src={Logo} alt="logo" width={45.9} height={48} />
        <h1 className="text-4xl text-primary-blue font-bold">
          Create New Password
        </h1>
        <p className="text-sm text-primary-grey">
          Kindly enter a unique password to secure your account
        </p>
      </article>
      <section className="mt-10">
        <Input
          label="Password"
          id="password"
          name="password"
          placeholder="Password"
          error={ctaClicked && !payload.password}
        >
          <PasswordField
            id="password-field"
            errorField={ctaClicked && !payload.password}
            emitPassword={(e) =>
              handleChange({
                target: { name: "password", value: e },
              })
            }
          />
        </Input>
        <Input
          label="Confirm Password"
          id="confirm-password"
          name="confirm-password"
          placeholder="Confirm Password"
          error={
            ctaClicked &&
            (!payload.confirm || payload.password !== payload.confirm)
          }
          errorMsg={
            ctaClicked && !payload.confirm
              ? "Confirm password is required"
              : ctaClicked && payload.password !== payload.confirm
              ? "Passwords do not match"
              : ""
          }
        >
          <PasswordField
            disabled={!payload.password}
            id="confirm-password-field"
            passwordStrengthNeeded={false}
            errorField={ctaClicked && !payload.confirm}
            emitPassword={(e) =>
              handleChange({
                target: { name: "confirm", value: e },
              })
            }
          />
        </Input>
        <Button
          type="submit"
          text="Submit"
          loading={isLoading}
          variant="secondary"
          size="md"
          // disabled
          className="w-full font-medium rounded-[12px] mt-10"
        />
      </section>
    </form>
  );
};

export default ResetPassword;
