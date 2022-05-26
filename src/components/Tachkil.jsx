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
      else if (select > input.value.length) {
        start = input.value.length;
      } else start = select;
      setInput((input) => ({ ...input, start }));
    }
  }

  function updateValue(letter) {
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
        setInput(({ value, start, ...others }) => ({
          ...others,
          start: start,
          value: value.slice(0, start) + letter + value.slice(start),
        }));
      }
    }

    // inputRef.current.focus();
  }
  function stringCol() {
    const str = [];
    for (let i = 0; i < input.value.length; i++) {
      if (i === input.start - 1) {
        str.push(<span className=" text-green-600">{input.value[i]}</span>);
      } else if (
        !cLetters.includes(input.value[i]) &&
        ((i + 1 < input.value.length &&
          !cLetters.includes(input.value[i + 1])) ||
          input.value[i + 1] === undefined)
      ) {
        str.push(<span className=" text-red-600">{input.value[i]}</span>);
      } else str.push(<span>{input.value[i]}</span>);
    }
    return str;
  }
  const createButtons = cLetters.map((letter, i) => (
    <button
      key={i}
      className="border-black relative border-2 mt-10 mx-2"
      style={{ fontSize: "30px", width: "50px" }}
      onClick={() => updateValue(letter)}
    >
      <div>{letter}</div>
      <div className="bg-black px-1 absolute text-white -bottom-2 -left-1 text-sm">
        {i + 1}
      </div>
    </button>
  ));

  return (
    <div
      className="mt-32 outline-none"
      tabindex="0"
      onKeyDown={({ key }) => {
        if (key && ["1", "2", "3", "4", "5", "6", "7", "8"].includes(key))
          updateValue(cLetters[Number(key) - 1]);

        if (key === "ArrowRight") {
          let i = input.start + (input.start > 1 ? -1 : 0);
          for (
            ;
            i > 1 &&
            (cLetters.includes(input.value[i - 1]) ||
              input.value[i - 1] === " ");
            i--
          );
          setStart(i);
        }
        if (key === "ArrowLeft") {
          let i =
            input.start <= input.value.length ? input.start + 1 : input.start;
          for (
            ;
            i < input.value.length &&
            (cLetters.includes(input.value[i - 1]) ||
              input.value[i - 1] === " ");
            i++
          );
          setStart(i);
        }
      }}
    >
      <div className="relative w-52 mx-auto">
        <div className="border-black -z-0  bg-white left-0 absolute top-0 border-2 text-right w-52 mx-auto">
          {stringCol()}
        </div>
        <input
          spellCheck="false"
          style={{ direction: "rtl" }}
          className="border-black border-2 z-20 left-0  absolute top-0 caret-transparent bg-transparent text-[rgba(0,0,0,0)] text-right w-52 "
          ref={inputRef}
          onClick={({ target }) => {
            setStart(target.selectionStart);
          }}
          value={input.value}
          onChange={({ target }) => {
            if (
              !["1", "2", "3", "4", "5", "6", "7", "8"].includes(
                target.value[input.value.length]
              ) &&
              ((target.value.length > input.value.length &&
                cLetters.includes(target.value[input.start])) ||
                (target.value.length < input.value.length &&
                  cLetters.includes(input.value[input.start - 1])))
            ) {
              setInput((input) => ({
                ...input,
                value: target.value,
              }));
            }
          }}
        />
      </div>

      <div>{createButtons}</div>
    </div>
  );
}
