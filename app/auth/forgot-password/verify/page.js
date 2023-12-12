"use client";
import Input from "@/components/forms/Input";
import styles from "../../../../assets/styles/auth-screens.module.css";
import Logo from "../../../../assets/images/admin-logo.png";
import Image from "next/image";
import OTPInput from "react-otp-input";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import functions from "@/utils/functions";
import ResendOTP from "@/components/verify/ResendOTP";
import Button from "@/components/ui/Button";

const VerifyPassword = () => {
  const { push, back } = useRouter();
  const [otp, setOtp] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [ctaClicked, setCtaClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [renderInput, setRenderInput] = useState(false);

  //   const notify = useNotify();

  const { maskedEmail } = functions;

  const handleVerificationSubmit = async (e) => {
    e.preventDefault();
    setCtaClicked(true);
    if (otp?.length !== 6) {
      return;
    }
    setIsLoading(true);
    try {
      const payload = {
        otp,
        email,
        otpType,
      };
      const response = await authenticate.verifyEmailOtp(payload);
      console.log(response);
      notify("success", "Your email has been verified!");
      push(nextPath);
    } catch (_err) {
      const { message } = _err.response?.data || _err;
      notify("error", message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setRenderInput(true);
    setErrorMsg("");
  }, []);

  return (
    <form onSubmit={handleVerificationSubmit}>
      <article className="text-center font-graphik grid place-items-center">
        <Image src={Logo} alt="logo" width={45.9} height={48} />
        <h1 className="text-4xl text-primary-blue font-bold">
          Verify Email Address
        </h1>
        <p className="text-sm text-primary-grey">
          We sent a 6 digit code to daniel****@gmail.com, please enter the code
          below, or click the verification link in your mail to complete
          verification
        </p>
      </article>
      <section className="mt-10">
        <Input
          error={(ctaClicked && otp?.length !== 6) || errorMsg}
          errorMsg={otp?.length !== 6 ? "Valid OTP needed" : errorMsg}
          msgPositionCenter={true}
        >
          <div className={styles.otp_input}>
            {renderInput ? (
              <OTPInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                shouldAutoFocus={true}
                inputType="tel"
                inputMode={null}
                renderSeparator={<span />}
                renderInput={(props) => <input {...props} />}
              />
            ) : (
              <></>
            )}
          </div>
        </Input>
        <ResendOTP />
        <Button
          type="submit"
          text="Verify"
          loading={isLoading}
          variant="secondary"
          size="md"
          // disabled
          className="w-full font-medium rounded-[12px] mt-6"
        />
      </section>
    </form>
  );
};

export default VerifyPassword;
