import { useState } from "react";

export function ChoiceTa2lif() {
  const [index, setIndex] = useState(0);
  const functionalities = [
    {
      short: "text1",
      long: "descrip1",
    },
    {
      short: "text2",
      long: "descrip2",
    },
    {
      short: "text3",
      long: "descrip3",
    },
    {
      short: "text4",
      long: "descrip4",
    },
  ];
  return (
    <div className="flex h-screen pt-10 justify-end items-center">
      <div className="text-right border-r-4 rounded-sm border-[#A58453] pr-8">
        <div className="text-3xl text-[#A58453]">
          {functionalities[index].short}
        </div>
        <div className="text-lg">{functionalities[index].long}</div>
      </div>

      {/* container */}
      <div className="flex flex-wrap flex-row-reverse h-[31.5rem] w-[54rem] mx-20 overflow-y-scroll items-center px-5 pt-4">
        {functionalities.map((functionality, key) => (
          <div
            onClick={() => setIndex(key)}
            key={key}
            className="bg-[#FBFAF8] rounded-[40px] w-60 h-56 flex justify-center items-center mr-6 mb-6"
          >
            {functionality.short}
          </div>
        ))}
      </div>
    </div>
  );
}
