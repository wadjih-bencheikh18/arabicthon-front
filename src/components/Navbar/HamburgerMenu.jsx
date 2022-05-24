const HamburgerMenu = ({ menuOpen }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`ease h-6 w-6 fill-[#002147] transition duration-300 ${
      menuOpen ? "rotate-90 transform" : ""
    }`}
    viewBox="0 0 20 20"
    fill="#fff"
  >
    <path
      fillRule="evenodd"
      d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
      clipRule="evenodd"
    />
  </svg>
);

export default HamburgerMenu;
