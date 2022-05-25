const sections = [
  "",
  "الصفحة الرئيسية",
  "تأليف شعر",
  "تحليل شعر",
  "تواصل معنا",
];

const NavbarLinks = sections.map((section) => (
  <a href={section} className="hover:text-[#A58453]">
    {section}
  </a>
));

export default NavbarLinks;
