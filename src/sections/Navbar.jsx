import { useState } from "react";
import NavbarContent from "../components/Navbar/NavbarContent";
import MobileMenu from "../components/Navbar/MobileMenu";
import NavbarLinks from "../components/Navbar/NavbarLinks";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="fixed top-0 z-20 w-screen bg-[#FBFAF8] py-3">
      <NavbarContent menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen}>{NavbarLinks}</MobileMenu>
    </div>
  );
}
