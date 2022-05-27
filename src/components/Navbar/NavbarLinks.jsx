import Ta2lifDropDown from "./Ta2lifDropDown";
import Ta7lilDropDown from "./Ta7lilDropDown";
const sections = [
  <a href="/" className="hover:text-[#A58453] lg:ml-12">
    الصفحة الرئيسية
  </a>,
  <Ta2lifDropDown />,
  <Ta7lilDropDown />,
  <a href="/contact" className="hover:text-[#A58453]">
    تواصل معنا
  </a>,
];

const NavbarLinks = sections.map((section, i) => (
  <div key={i} className="h-7">
    {section}
  </div>
));

export default NavbarLinks;
