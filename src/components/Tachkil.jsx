import { useState, useRef } from "react";

const letters = [
  "\u064E",
  "\u064F",
  "\u0650",
  "\u064B",
  "\u064C",
  "\u064D",
  "\u0652",
];
const cLetters = [...letters, "\u0651"];
const chada = "\u0651";
export default function Tachkil() {
  const [input, setInput] = useState({
    value: "م\u0652ساء الخي\u0652ر",
    start: 0,
  });
  const inputRef = useRef(null);
  function setStart(select) {
    if (select) {
      let start = 0;
      if (select === 0 || input.value[select - 1] === " ") start = select + 1;
      else {
        start = select;
      }
      setInput((input) => ({ ...input, start }));
    }
  }

  function updateValue(letter) {
    //alert(input.start);
    if (letter !== chada) {
      if (letters.includes(input.value[input.start - 1])) {
        setInput(({ value, start, ...others }) => ({
          ...others,
          start: start,
          value: value.slice(0, start - 1) + letter + value.slice(start),
        }));
      } else if (letters.includes(input.value[input.start])) {
        setInput(({ value, start, ...others }) => ({
          ...others,
          start: start,
          value: value.slice(0, start) + letter + value.slice(start + 1),
        }));
      } else if (input.value[input.start] === chada) {
        setInput(({ value, start, ...others }) => ({
          ...others,
          start: start + 1,
          value: value.slice(0, start + 1) + letter + value.slice(start + 2),
        }));
      } else
        setInput(({ value, start, ...others }) => ({
          ...others,
          start: start,
          value: value.slice(0, start) + letter + value.slice(start),
        }));
    } else if (
      input.value[input.start - 1] !== chada &&
      input.value[input.start] !== chada
    ) {
      if (
        letters.includes(input.value[input.start - 1]) &&
        input.value[input.start - 2] !== chada
      ) {
        alert("a");
        setInput(({ value, start, ...others }) => ({
          ...others,
          start: start,
          value: value.slice(0, start - 1) + letter + value.slice(start - 1),
        }));
      } else if (letters.includes(input.value[input.start])) {
        setInput(({ value, start, ...others }) => ({
          ...others,
          start: start,
          value: value.slice(0, start) + letter + value.slice(start),
        }));
      } else {
        alert("c");
        setInput(({ value, start, ...others }) => ({
          ...others,
          start: start,
          value: value.slice(0, start) + letter + value.slice(start),
        }));
      }
    }

    // inputRef.current.focus();
  }

  const createButtons = cLetters.map((letter, i) => (
    <button
      key={i}
      className="border-black border-2 mt-10 mx-2"
      style={{ fontSize: "30px", width: "50px" }}
      onClick={() => updateValue(letter)}
    >
      {letter}
    </button>
  ));

  return (
    <div className="mt-32">
      <input
        style={{ direction: "rtl" }}
        className="border-black border-2 text-right "
        ref={inputRef}
        onClick={({ target }) => {
          setStart(target.selectionStart);
        }}
        value={input.value}
        onChange={({ target }) => {
          if (
            (target.value.length > input.value.length &&
              cLetters.includes(target.value[input.start])) ||
            (target.value.length < input.value.length &&
              cLetters.includes(input.value[input.start - 1]))
          ) {
            setInput((input) => ({
              ...input,
              start: target.selectionStart,
              value: target.value,
            }));
          }
        }}
      />

      <div>{createButtons}</div>
    </div>
  );
}
