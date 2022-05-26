import { ChevronDownIcon } from "@heroicons/react/solid";
import Ta2lifLinks from "./Ta2lifLinks";
import DropDown from "./DropDown";
const sections = [
  <a href="./" className="hover:text-[#A58453]">
    تواصل معنا
  </a>,
  <a href="./" className="flex items-center hover:text-[#A58453]">
    <ChevronDownIcon className="mr-2 mt-1 w-5" /> تحليل شعر
  </a>,

  <DropDown />,
  <a href="./" className="hover:text-[#A58453]">
    الصفحة الرئيسية
  </a>,
];

const NavbarLinks = sections.map((section, i) => (
  <div key={i} className="h-7">
    {section}
  </div>
));

export default NavbarLinks;
