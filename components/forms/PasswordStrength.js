import styles from "@/assets/styles/auth-screens.module.css";
import { CheckIcon, CheckIconValid } from "@/icons/icon";

const PasswordStrength = ({ valid, text, error }) => {
  return (
    <div
      className={`${styles.password_strength} ${
        !valid && error ? styles.error : ""
      }`}
    >
      {!valid ? <CheckIcon /> : <CheckIconValid />}
      <span>{text}</span>
    </div>
  );
};

export default PasswordStrength;
