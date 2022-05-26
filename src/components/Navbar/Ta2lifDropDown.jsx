import { ChevronDownIcon } from "@heroicons/react/solid";
import { useState } from "react";

export default function Ta2lifDropDown() {
  const [open, setOpen] = useState(false);
  const sections = ["توعنا", "تحعر", " شعر", "افحة سية"];

  const Ta2lifLinks = sections.map((section, i) => (
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
        <ChevronDownIcon className="mr-2 mt-1 w-5 hidden lg:block" /> تأليف شعر
      </div>
      {/* Ta2lif links */}
      <nav
        className={`flex flex-col transition-all duration-1000 ease-in-out overflow-hidden items-end bg-[#FBFAF8] p-5 ${
          open ? "h-18" : "h-0 py-0"
        }`}
      >
        {Ta2lifLinks}
      </nav>
    </div>
  );
}
