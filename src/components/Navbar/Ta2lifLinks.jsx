const sections = ["تواصل معنا", "تحليل شعر", "تأليف شعر", "الصفحة الرئيسية"];

const Ta2lifLinks = sections.map((section, i) => (
  <a href={section} key={i} className="hover:text-[#A58453]">
    {section}
  </a>
));

export default Ta2lifLinks;
