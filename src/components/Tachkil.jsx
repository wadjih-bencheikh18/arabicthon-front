import { useState, useRef } from "react";

export default function Tachkil() {
  const [input, setInput] = useState({
    letters: [
      "\u064E",
      "\u064F",
      "\u0650",
      "\u064B",
      "\u064C",
      "\u064D",
      "\u0651",
      "\u0652",
    ],
    value: "مساء الخير",
    start: 0,
  });
  const inputRef = useRef(null);
  function updateValue(letter) {
    setInput(({ value, start, ...others }) => ({
      ...others,
      start: start + 1,
      value: value.slice(0, start) + letter + value.slice(start),
    }));
  }

  const createButtons = input.letters.map((letter, i) => (
    <button
      style={{ fontSize: "30px", width: "50px" }}
      key={i}
      onClick={() => updateValue(letter)}
    >
      {letter}
    </button>
  ));

  return (
    <div>
      <input
        ref={inputRef}
        onClick={({ target }) => {
          const start = target.selectionStart;
          if (start) setInput((input) => ({ ...input, start }));
        }}
        value={input.value}
        onChange={({ target }) => {
          alert(target);
          setInput((input) => ({
            ...input,
            value: target.value,
          }));
        }}
      />

      <div>{createButtons}</div>
    </div>
  );
}
