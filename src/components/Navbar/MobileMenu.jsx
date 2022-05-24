const MobileMenu = ({ children, menuOpen }) => (
  <nav
    className={`overflow-hidden text-[#000D3C] transition-all duration-1000 ease-in-out ${
      menuOpen ? "h-72 transform pt-6" : " h-0"
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
