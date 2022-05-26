const sections = ["تواصل معنا", "تحليل شعر", "تأليف شعر", "الصفحة الرئيسية"];

const Ta2lifLinks = sections.map((section) => (
  <a href={section} className="hover:text-[#A58453]">
    {section}
  </a>
));

export default Ta2lifLinks;
