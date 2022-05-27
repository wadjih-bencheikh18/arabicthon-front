import { useState } from "react";

export default function InputResult({ setValue, placeHolder = "input" }) {
  const [input, setInput] = useState("");
  return (
    <textarea
      className="resize-none border-black border-2 text-center mt-5"
      cols={Math.max(...input.split("\n").map((s) => s.length))}
      rows={input.split("\n").length}
      value={input}
      placeHolder={placeHolder}
      onChange={({ target }) => setInput(target.value)}
      onKeyDown={({ key }) => {
        if (key === "Enter") setValue(input);
      }}
    ></textarea>
  );
}
