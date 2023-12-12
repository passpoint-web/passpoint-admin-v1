import styles from "@/assets/styles/auth-screens.module.css";
import { useEffect, useState } from "react";
// import { resendOtp } from "@/services/restService";
// import { useNotify } from "@/utils/hooks";
import Button from "../ui/Button";
const ResendOTP = ({ email, clearOtp }) => {
  const [resendOTPStatus, setResendOTPStatus] = useState("Resend OTP");
  const [countDown, setCountDown] = useState(0);
  const countDownTimer = () => {
    if (countDown > 0) {
      window.setTimeout(() => {
        setCountDown(countDown - 1);
      }, 1000);
    } else {
      setResendOTPStatus("Resend OTP");
    }
  };

  // const notify = useNotify();

  useEffect(() => {
    countDownTimer();
  }, [countDown]);

  const resendOTP = async (e) => {
    e.preventDefault();
    setResendOTPStatus("Resending...");
    try {
      const payload = {
        email,
      };
      const response = await resendOtp(payload);
      // console.log(response)
      const { message } =
        response.data ||
        "OTP Resent Successfully to Email Address. Please Retry New OTP.";
      notify("success", message);
      clearOtp();
      setCountDown(59);
      countDownTimer();
    } catch (_err) {
      const { message } = _err.response?.data || _err;
      notify("error", message);
    } finally {
      setResendOTPStatus("Resend OTP");
    }
  };

  return (
    <p className="flex justify-center gap-1 mt-4 text-grey-1 font-medium text-[16px] font-graphik">
      Didn’t receive any code?{" "}
      {!countDown && resendOTPStatus === "Resend OTP" ? (
        <Button
          text="Resend OTP"
          onClick={resendOTP}
          className="inline text-primary-blue font-inter font-bold"
        />
      ) : !countDown && resendOTPStatus === "Resending..." ? (
        <span className="">Resending...</span>
      ) : (
        <span className="text-primary-blue">Resend OTP(0.{countDown}s)</span>
      )}
    </p>
  );
};

export default ResendOTP;
