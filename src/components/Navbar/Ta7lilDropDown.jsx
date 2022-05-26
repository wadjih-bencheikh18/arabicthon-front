import { ChevronDownIcon } from "@heroicons/react/solid";
import { useState } from "react";

export default function Ta7lilDropDown() {
  const [open, setOpen] = useState(false);
  const sections = ["تواصا", "تر", "تأ شعر", "الة الرية"];

  const Ta7lilLinks = sections.map((section, i) => (
    <a href={section} key={i} className="hidden lg:block hover:text-[#A58453]">
      {section}
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
          open ? "h-32 transform py-4" : "h-0"
        }`}
      >
        {Ta7lilLinks}
      </nav>
    </div>
  );
}
