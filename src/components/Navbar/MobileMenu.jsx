const MobileMenu = ({ children, menuOpen }) => (
  <nav
    className={`overflow-hidden transition-all duration-1000 ease-in-out ${
      menuOpen ? "h-44 transform pt-3" : " h-0"
    } flex flex-col `}
  >
    <div
      className={`transition-all duration-1000 ease-in-out ${
        menuOpen ? "m-0 transform" : " -m-40"
      }  flex flex-col space-y-3 text-center lg:hidden`}
    >
      {children}
    </div>
  </nav>
);

export default MobileMenu;
