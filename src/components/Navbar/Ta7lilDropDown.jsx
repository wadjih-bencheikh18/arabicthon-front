import { ChevronDownIcon } from "@heroicons/react/solid";
import { useState } from "react";

export default function Ta7lilDropDown() {
  const [open, setOpen] = useState(false);
  const sections = [
    { name: "البحر دون تشكيل", link: "/analyse/ba7rDounTachkil" },
    { name: "التشكيل", link: "/analyse/tachkil" },
    { name: "الكتابة العروضية", link: "/analyse/kitaba3arodya" },
    { name: "التقطيع", link: "/analyse/ta9ti3" },
    { name: "التفعيلات", link: "/analyse/taf3ilat" },
    { name: "البحر بالتشكيل", link: "/analyse/ba7rTachkil" },
  ];

  const Ta7lilLinks = sections.map((section, key) => (
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
        <ChevronDownIcon className="mr-2 mt-1 w-5 hidden lg:block" /> تحليل شعر
      </div>
      {/* Ta2lif links */}
      <nav
        className={`flex flex-col transition-all duration-1000 ease-in-out overflow-hidden items-end bg-[#FBFAF8] px-5 ${
          open ? "h-44 transform py-4" : "h-0"
        }`}
      >
        {Ta7lilLinks}
      </nav>
    </div>
  );
}
