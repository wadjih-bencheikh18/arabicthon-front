import HamburgerMenu from "./HamburgerMenu";
import NavbarLinks from "./NavbarLinks";

const NavbarContent = ({ menuOpen, setMenuOpen }) => (
  <div className="ml-10 mr-16 flex items-center justify-between font-medium text-[#000D3C] lg:mr-24">
    {/* soai logo */}
    <div className="w-[150px]">
      <img src="./logoSOAI.svg" alt="" />
    </div>
    {/* Navbar links */}
    <nav className="hidden space-x-8 lg:block lg:space-x-12">{NavbarLinks}</nav>
    {/* Hamburger menu for mobile version */}
    <button
      type="button"
      aria-label="Toggle mobile menu"
      onClick={() => setMenuOpen((menuOpen) => !menuOpen)}
      className="rounded ring-2 ring-[#000D3C] lg:hidden"
    >
      <HamburgerMenu menuOpen={menuOpen} />
    </button>
  </div>
);

export default NavbarContent;
