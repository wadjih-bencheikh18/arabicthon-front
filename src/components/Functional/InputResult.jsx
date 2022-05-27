import { ChevronDoubleLeftIcon } from "@heroicons/react/solid";
import { useState } from "react";

export default function InputResult({
  setValue,
  className,
  placeHolder = "شعر",
  cols = "40",
  rows = "3",
}) {
  const [input, setInput] = useState("");
  return (
    <div className="flex flex-row-reverse items-end mt-5">
      <textarea
        className={`${className} resize-none border-black py-3 border-2 text-center rounded-md input`}
        cols={Math.max(...input.split("\n").map((s) => s.length), cols)}
        rows={Math.max(input.split("\n").length, rows)}
        value={input}
        placeHolder={placeHolder}
        onChange={({ target }) => setInput(target.value)}
        style={{ direction: "rtl" }}
      ></textarea>
      <button
        onClick={({ key }) => {
          if (key === "Enter") setValue(input);
        }}
        className="btn flex rounded-md items-center justify-center w-12 h-6 text-white text-lg bg-[#A58453] -mb-3 -mr-9"
      >
        <ChevronDoubleLeftIcon className="w-5 h-5" />
      </button>
    </div>
  );
}
