import { ChevronDoubleLeftIcon } from "@heroicons/react/solid";
import { useState } from "react";

export default function InputResult({
  setValue,
  className,
  placeHolder,
  title = "شعر",
  init = "",
  minWidth = "40",
  maxWidth = "100",
  minHeight = "3",
  maxHeight = "50",
  button = false,
}) {
  const [input, setInput] = useState(init);
  return (
    <div className="flex relative flex-row-reverse items-end mt-5">
      <textarea
        className={`resize-none outline-none py-3 px-3 text-right rounded-md ${className}`}
        cols={Math.min(
          Math.max(...input.split("\n").map((s) => s.length), minWidth),
          maxWidth
        )}
        rows={Math.min(
          Math.max(input.split("\n").length, minHeight),
          maxHeight
        )}
        value={input}
        placeHolder={placeHolder}
        onChange={({ target }) => setInput(target.value)}
        style={{ direction: "rtl" }}
      ></textarea>
      <h3 className="absolute text-xl top-0 -right-28 pt-2 text-[#A58453]">
        {title}
      </h3>
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
