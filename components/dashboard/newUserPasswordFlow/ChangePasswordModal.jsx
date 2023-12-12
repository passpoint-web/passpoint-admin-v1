"use client";
import Input from "@/components/forms/Input";
import PasswordField from "@/components/forms/PasswordField";
import ModalWrapper from "@/components/modals/ModalWrapper";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ChangePasswordModal = ({ setModal }) => {
  const { push, back } = useRouter();
  //   const email = getForgotPasswordEmail();
  const [isLoading, setIsLoading] = useState(false);
  const [ctaClicked, setCtaClicked] = useState(false);
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

  //   const notify = useNotify();

  const handleResetPasswordSubmit = async (e) => {
    e.preventDefault();
    setCtaClicked(true);
    if (!passwordFieldsValid) {
      return;
    }
    console.log("Helo")
    setModal("password-success");
    console.log("okay")
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
    <ModalWrapper
      setModal={setModal}
      title="Update Your Password"
      subtitle="Kindly enter a unique password to secure your account"
    >
      <form onSubmit={handleResetPasswordSubmit}>
        <section>
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
          <Button
            type="button"
            text="Skip for Now >>"
            loading={isLoading}
            size="md"
            onClick={() => setModal("")}
            // disabled
            className="w-full font-medium text-primary-blue"
          />
        </section>
      </form>
    </ModalWrapper>
  );
};

export default ChangePasswordModal;
