import { ChevronDownIcon } from "@heroicons/react/solid";
import Ta2lifLinks from "./Ta2lifLinks";

const sections = [
  <a href="./" className="hover:text-[#A58453]">
    تواصل معنا
  </a>,
  <a href="./" className="flex items-center hover:text-[#A58453]">
    <ChevronDownIcon className="mr-2 mt-1 w-5" /> تحليل شعر
  </a>,

  <div>
    <a
      href="./"
      className="flex items-center justify-center hover:text-[#A58453]"
    >
      <ChevronDownIcon className="mr-2 mt-1 w-5" /> تأليف شعر
    </a>
    {/* Ta2lif links */}
    <nav className="flex flex-col items-end bg-[#FBFAF8] p-10">
      {Ta2lifLinks}
    </nav>
  </div>,
  <a href="./" className="hover:text-[#A58453]">
    الصفحة الرئيسية
  </a>,
];

const NavbarLinks = sections.map((section) => (
  <a href={section} className="h-7">
    {section}
  </a>
));

export default NavbarLinks;
