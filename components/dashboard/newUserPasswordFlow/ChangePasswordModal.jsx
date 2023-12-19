"use client";
import Input from "@/components/forms/Input";
import PasswordField from "@/components/forms/PasswordField";
import ModalWrapper from "@/components/modals/ModalWrapper";
import Button from "@/components/ui/Button";
import { saveCredentials } from "@/services/localService";
import { authenticate } from "@/services/restService";
import { useNotify } from "@/utils/hooks";
import React, { useEffect, useState } from "react";

const ChangePasswordModal = ({ setModal }) => {
  const savedCredentials = saveCredentials();
  const [isLoading, setIsLoading] = useState(false);
  const [ctaClicked, setCtaClicked] = useState(false);
  const [passwordFieldsValid, setPasswordFieldsValid] = useState(false);
  const [payload, setPayload] = useState({
    password: "",
    confirm: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPayload((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const notify = useNotify();

  const handleChangePassword = async (e) => {
    e.preventDefault();
    console.log(payload);
    setCtaClicked(true);
    if (!passwordFieldsValid) {
      return;
    }
    setIsLoading(true);
    try {
      const response = await authenticate.changeAdminPassword(payload);
      if (response.status === 200) {
        saveCredentials({ ...savedCredentials, passwordChanged: true });
        setModal("password-success");
      }
    } catch (_err) {
      const { message } = _err.response?.data || _err;
      console.log(message);
      notify("error", message);
    } finally {
      setIsLoading(false);
    }
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
      <form onSubmit={handleChangePassword}>
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
            size="md"
            onClick={() => setModal(null)}
            // disabled
            className="w-full font-medium text-primary-blue"
          />
        </section>
      </form>
    </ModalWrapper>
  );
};

export default ChangePasswordModal;
