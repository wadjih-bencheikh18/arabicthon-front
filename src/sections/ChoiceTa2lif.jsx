import { useState } from "react";
import { ChevronDoubleLeftIcon } from "@heroicons/react/solid";

export function ChoiceTa2lif() {
  const [index, setIndex] = useState(undefined);
  const functionalities = [
    {
      short: "وزن و حرف الروي",
      long: "تأليف الشعر بناء على وزن و حرف الروي",
      link: "/create/waznRawi",
    },
    {
      short: "موضوع",
      long: "تأليف الشعر بناء على موضوع",
      link: "/create/mawdo3",
    },
    {
      short: "صورة",
      long: "تأليف الشعر بناء على صورة",
      link: "/create/soura",
    },
    {
      short: "إكمال كلمة",
      long: "إكمال آخر كلمة بيت بناء على وزن و حرف الروي",
      link: "/create/ikmalKalima",
    },
  ];
  return (
    <div className="h-screen flex flex-col justify-end items-end p-16">
      <div className="mr-40 text-3xl text-[#A58453] mb-10">تأليف شعر</div>
      <div className="flex justify-end items-center">
        {/* text */}
        {index !== undefined && (
          <div className="text-right flex flex-col items-end">
            <div className="text-3xl text-[#A58453] mb-10 pr-8">
              {functionalities[index]?.short}
            </div>
            <div className="text-lg border-r-4 rounded-sm border-[#A58453] pr-8">
              {functionalities[index]?.long}
            </div>
            <a href={functionalities[index].link} className="mt-16">
              <button className="btn flex rounded-md py-2 px-3 text-white text-lg bg-[#A58453]">
                <ChevronDoubleLeftIcon className="w-5" />
              </button>
            </a>
          </div>
        )}

        {/* cards container */}
        <div className="flex flex-wrap flex-row-reverse h-[31.5rem] w-[54rem] mx-20 overflow-y-scroll items-center px-5 pt-4">
          {functionalities.map((functionality, key) => (
            <div
              onClick={() => setIndex(key)}
              key={key}
              className="bg-[#FBFAF8] rounded-[40px] w-60 h-56 flex flex-col justify-center items-end mr-6 mb-6 cursor-pointer"
            >
              <div className="bg-[#A58453] w-36 h-7"></div>
              <div className="mr-8 mt-2">{functionality.short}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
