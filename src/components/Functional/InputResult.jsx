import { ChevronDoubleLeftIcon } from "@heroicons/react/solid";
import { useState } from "react";

export default function InputResult({
  setValue,
  className,
  placeHolder = "شعر",
  title = "شعر",
  init = "",
  cols = "40",
  rows = "3",
  button = false,
}) {
  const [input, setInput] = useState(init);
  return (
    <div className="flex relative flex-row-reverse items-end mt-5">
      <textarea
        className={`${className} resize-none outline-none py-3 px-3 text-center rounded-md`}
        cols={Math.min(
          Math.max(...input.split("\n").map((s) => s.length), cols),
          100
        )}
        rows={Math.max(input.split("\n").length, rows)}
        value={input}
        placeHolder={placeHolder}
        onChange={({ target }) => setInput(target.value)}
        style={{ direction: "rtl" }}
      ></textarea>
      <h3 className=" absolute text-xl top-0 -right-20 pt-2 font-bold">{title}</h3>
      {button && (
        <button
          onClick={() => {
            setValue(input);
          }}
          className="btn flex rounded-md items-center justify-center w-12 h-6 text-white text-lg bg-[#A58453] -mb-3 -mr-9"
        >
          <ChevronDoubleLeftIcon className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
