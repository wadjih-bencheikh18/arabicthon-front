import { ChevronDownIcon } from "@heroicons/react/solid";
import Ta2lifLinks from "./Ta2lifLinks";
import { useState } from "react";
export default function DropDown() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div
        className="flex cursor-pointer items-center justify-center hover:text-[#A58453]"
        onClick={() => {
          setOpen((o) => !o);
        }}
      >
        <ChevronDownIcon className="mr-2 mt-1 w-5" /> تأليف شعر
      </div>
      {/* Ta2lif links */}
      <nav
        className={`flex flex-col transition-all duration-1000 ease-in-out overflow-hidden items-end bg-[#FBFAF8] p-5 ${
          open ? "h-0 py-0" : "h-18"
        }`}
      >
        {Ta2lifLinks}
      </nav>
    </div>
  );
}
