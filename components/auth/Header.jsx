import PasspointLogo from "../ui/PasspointLogo";

const Header = () => {
  return (
    <div className="w-full p-[34px_0] border-b border-solid border-grey-5">
      <header className="w-[90%] mx-auto">
        <PasspointLogo href="/auth/login" />
      </header>
    </div>
  );
};

export default Header;
