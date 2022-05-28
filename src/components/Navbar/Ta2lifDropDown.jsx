import { ChevronDownIcon } from "@heroicons/react/solid";
import { useState } from "react";

export default function Ta2lifDropDown() {
  const [open, setOpen] = useState(false);
  const sections = [
    { name: "بحر و حرف الروي", link: "/create/ba7rRawi" },
    { name: "موضوع", link: "/create/mawdo3" },
    { name: "صورة", link: "/create/soura" },
    { name: "إكمال كلمة", link: "/create/ikmalKalima" },
  ];

  const Ta2lifLinks = sections.map((section, key) => (
    <a
      href={section.link}
      key={key}
      className="hidden lg:block hover:text-[#A58453]"
    >
      {section.name}
    </a>
  ));
  return (
    <div>
      <div
        className="flex cursor-pointer items-center justify-center hover:text-[#A58453]"
        onClick={() => {
          setOpen((o) => !o);
        }}
      >
        <ChevronDownIcon className="mr-2 mt-1 w-5 hidden lg:block" /> تأليف شعر
      </div>
      {/* Ta2lif links */}
      <nav
        className={`flex flex-col transition-all duration-1000 ease-in-out overflow-hidden items-end bg-[#FBFAF8] px-5 ${
          open ? "h-28 transform py-2" : "h-0"
        }`}
      >
        {Ta2lifLinks}
      </nav>
    </div>
  );
}
