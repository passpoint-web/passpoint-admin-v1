const Button = ({
  text,
  onClick,
  size,
  type,
  variant,
  className,
  icon,
  leftIcon,
  rightIcon,
  loading,
  loadingRight,
  disabled,
}) => {
  const btnVariant = {
    primary:
      "bg-primary-blue text-primary-white borderAttributes hover:text-primary-blue",
    secondary:
      "bg-primary-black text-primary-white borderAttributes hover:text-primary-black",
    outlined:
      "text-grey-1 bg-primary-white border border-grey-5 border-solid buttonShadow hover:bg-grey-5 transition-g",
  };
  const btnSize = {
    sm: "p-[10px_20px]",
    md: "p-[12px_24px]",
    lg: "p-[16px_24px]",
    xlg: "p-[18px_32px]",
  };
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${className} ${btnSize[size]} ${
        btnVariant[variant]
      } rounded-[8px] outline-none font-graphik flex justify-center items-center gap-2 ${
        icon && "flex justify-between"
      } ${
        disabled &&
        "bg-grey-5 text-grey-3 border-grey-5 hover:bg-grey-5 hover:text-grey-3"
      }`}
    >
      {leftIcon}
      {text}
      {loading ? <Spin /> : null}
      {loadingRight ? <Spin /> : rightIcon}
    </button>
  );
};

export default Button;

export const Spin = () => (
  <svg
    className="animate-spin -ml-1 mr-3 h-[20px_important] w-5 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25 stroke-[4px]"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);
