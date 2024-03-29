import { useState } from "react";
import { ChevronDoubleLeftIcon } from "@heroicons/react/solid";

export function ChoiceTa7lil() {
  const [index, setIndex] = useState(undefined);
  const functionalities = [
    {
      short: "البحر دون تشكيل",
      long: "التعرف على بحر شعر دون تشكيل",
      link: "/ba7rDounTachkil",
    },
    {
      short: "التشكيل",
      long: "تشكيل الشعر",
      link: "/tachkil",
    },
    {
      short: "الكتابة العروضية",
      long: "الكتابة العروضية للشعر",
      link: "/kitaba3arodya",
    },
    {
      short: "التقطيع",
      long: "تقطيع الشعر",
      link: "/ta9ti3",
    },

    {
      short: "التفعيلات",
      long: "التعرف على تفعيلات شعر",
      link: "/taf3ilat",
    },
    {
      short: "البحر بالتشكيل",
      long: "التعرف على بحر شعر بتشكيل",
      link: "/ba7rTachkil",
    },
    {
      short: "حسب الطلب",
      long: "التعرف على خصائص الشعر حسب الطلب",
      link: "/analyseFull",
    },
  ];
  return (
    <div className="h-screen flex flex-col justify-end items-end p-16">
      <div className="mr-40 text-3xl text-[#A58453] mb-10">تحليل شعر</div>
      <div className="flex justify-end items-center">
        {/* description */}
        {index !== undefined && (
          <div className="2xl:w-96 text-right flex flex-col items-end bg-[rgb(165,132,83,0.2)] p-8 rounded-2xl">
            <div className="text-3xl text-[#A58453] mb-10 pr-8">
              {functionalities[index].short}
            </div>
            <div className="text-lg border-r-4 rounded-sm border-[#A58453] pr-8">
              {functionalities[index].long}
            </div>
            <a href={functionalities[index].link} className="self-start mt-16">
              <button className="btn flex rounded-md py-2 px-3 text-white text-lg bg-[#A58453] hover:animate-ping-once">
                <ChevronDoubleLeftIcon className="w-5" />
              </button>
            </a>
          </div>
        )}

        {/* cards container */}
        <div className="flex flex-wrap flex-row-reverse h-[31.5rem] 2xl:w-[54rem]  w-[50rem]  2xl:mx-20 overflow-y-scroll items-center px-5 pt-4">
          {functionalities.map((functionality, key) => (
            <div
              onClick={() => setIndex(key)}
              key={key}
              className="hover:animate-ping-once-fast bg-[#FBFAF8] rounded-[40px] w-60 h-56 flex flex-col justify-center items-end mr-6 mb-6 cursor-pointer"
            >
              <div className="mr-8 mt-10 text-lg">{functionality.short}</div>
              <div className="bg-[#A58453] mt-2 w-44 h-2 rounded-l-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
