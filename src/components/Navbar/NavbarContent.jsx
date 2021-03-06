import HamburgerMenu from "./HamburgerMenu";
import NavbarLinks from "./NavbarLinks";
import logo from "../../pics/logo.png";

const NavbarContent = ({ menuOpen, setMenuOpen }) => (
  <div className="ml-10 mr-16 flex items-center justify-between font-medium lg:mr-24">
    {/* logo */}
    <div className="w-[40px] m-2">
      <a href="./">
        <img src={logo} alt="logo" />
      </a>
    </div>
    {/* Navbar links */}
    <nav className="hidden space-x-8 lg:flex lg:flex-row-reverse lg:space-x-12">
      {NavbarLinks}
    </nav>
    {/* Hamburger menu for mobile version */}
    <button
      type="button"
      aria-label="Toggle mobile menu"
      onClick={() => setMenuOpen((menuOpen) => !menuOpen)}
      className="rounded ring-2 ring-[#A58453] lg:hidden"
    >
      <HamburgerMenu menuOpen={menuOpen} />
    </button>
  </div>
);

export default NavbarContent;
