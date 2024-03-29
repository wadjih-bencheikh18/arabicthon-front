import { ChevronDoubleLeftIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";

export default function InputResult({
  setValue,
  className,
  placeholder,
  title = "شعر",
  init = "",
  minWidth = "40",
  maxWidth = "100",
  minHeight = "3",
  maxHeight = "50",
  button = false,
  setUpdate,
  right = true,
}) {
  const [input, setInput] = useState(init);
  useEffect(() => {
    setUpdate && setUpdate(init);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="flex justify-center flex-row-reverse items-end mt-5">
      <div className="flex justify-center gap-4">
        <textarea
          className={`resize-none text-xl outline-none text-right py-3 px-3 rounded-md ${className}`}
          cols={Math.min(
            Math.max(...input.split("\n").map((s) => s.length), minWidth),
            maxWidth
          )}
          rows={Math.min(
            Math.max(input.split("\n").length, minHeight),
            maxHeight
          )}
          value={input}
          placeholder={placeholder}
          onChange={({ target }) => {
            setInput(target.value);
            setUpdate && setUpdate(target.value);
          }}
          style={{ direction: right ? "rtl" : "ltr" }}
        ></textarea>
        <h3 className="text-2xl pt-2 text-[#A58453]">{title}</h3>
      </div>
      {button && (
        <button
          onClick={() => {
            setValue(input);
          }}
          className="btn z-50 flex rounded-md items-center justify-center w-12 h-6 text-white text-lg bg-[#A58453] -mb-3 -mr-9 hover:animate-ping-once"
        >
          <ChevronDoubleLeftIcon className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
