import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="absolute bg-gradient-to-b from-black px-8 py-2 z-10">
      <img src={LOGO_URL} alt="logo" className="w-40" />
    </div>
  );
};

export default Header;
