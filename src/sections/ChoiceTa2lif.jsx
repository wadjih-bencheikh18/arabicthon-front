import { useState } from "react";
import { ChevronDoubleLeftIcon } from "@heroicons/react/solid";

export function ChoiceTa2lif() {
  const [index, setIndex] = useState(0);
  const functionalities = [
    {
      short: "text1",
      long: "descrip1",
      link: "/",
    },
    {
      short: "text2",
      long: "descrip2",
      link: "/",
    },
    {
      short: "text3",
      long: "descrip3",
      link: "/",
    },
    {
      short: "text4",
      long: "descrip4",
      link: "/",
    },
    {
      short: "text4",
      long: "descrip4",
      link: "/",
    },
    {
      short: "text4",
      long: "descrip4",
      link: "/",
    },
    {
      short: "text4",
      long: "descrip4",
      link: "/",
    },
    {
      short: "text4",
      long: "descrip4",
      link: "/",
    },
  ];
  return (
    <div className="flex h-screen pt-10 justify-end items-center">
      {/* text */}

      <div className="text-right flex flex-col items-end">
        <div className="text-3xl text-[#A58453] mb-10 pr-8">
          {functionalities[index].short}
        </div>
        <div className="text-lg border-r-4 rounded-sm border-[#A58453] pr-8">
          {functionalities[index].long}
        </div>
        <a href={functionalities[index].link} className="mt-16 mr-8">
          <button className="btn flex rounded-md py-2 px-3 text-white text-lg bg-[#A58453]">
            <ChevronDoubleLeftIcon className="w-5" />
          </button>
        </a>
      </div>

      {/* cards container */}
      <div className="flex flex-wrap flex-row-reverse h-[31.5rem] w-[54rem] mx-20 overflow-y-scroll items-center px-5 pt-4">
        {functionalities.map((functionality, key) => (
          <div
            onClick={() => setIndex((index) => key)}
            key={key}
            className="bg-[#FBFAF8] rounded-[40px] w-60 h-56 flex flex-col justify-center items-end mr-6 mb-6 cursor-pointer"
          >
            <div className="bg-[#A58453] w-36 h-7"></div>
            <div className="mr-8 mt-2">{functionality.short}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
