import styles from "@/assets/styles/form.module.css";
import { NoteIcon, SuccessIcon, WarningIcon } from "@/icons/icon";

const FeedbackInfo = ({ message, styleProps, center, type = "error", border=false }) => {
  return (
    <>
      <div
        className={`${styles.feedback_info_ctn} ${border ? styles.border : ''} ${styles[type]} ${
          center ? styles.center : ""
        }`}
        style={styleProps?.ctn}
      >
        <div className={styles.icon}>
          {type === "error" ? (
            <WarningIcon />
          ) : type === "info" ? (
            <NoteIcon />
          ) : type === "success" ? (
            <SuccessIcon />
          ) : (
            <NoteIcon />
          )}
        </div>
        <div className={styles.content} style={styleProps?.content}>
          {message}
        </div>
      </div>
    </>
  );
};

export default FeedbackInfo;
