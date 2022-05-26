import { useState, useRef, useMemo, useCallback } from "react";
import { BackspaceIcon } from "@heroicons/react/solid";
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
    value: "م\u0652ساء ال\u0651خ\u0652ير",
    start: 1,
  });
  const getLetterPos = useCallback(
    // get letter position (not tachkil pos)
    (select) => {
      let j = select;
      for (; j > 1 && cLetters.includes(input.value[j - 1]); j--);
      return j;
    },
    [input.value]
  );
  const inputRef = useRef(null);
  function setStart(select) {
    if (select) {
      let start = 0;
      if (select <= 0 || input.value[select - 1] === " ") start = select + 1;
      else if (select > input.value.length) {
        start = getLetterPos(input.value.length);
      } else {
        start = getLetterPos(select);
      }
      setInput((input) => ({ ...input, start }));
    }
  }

  function updateValue(letter) {
    if (letter !== chada) {
      if (!cLetters.includes(input.value[input.start])) {
        //there is no tachkil
        setInput(({ value, start, ...others }) => ({
          ...others,
          start: start,
          value: value.slice(0, start) + letter + value.slice(start),
        }));
      } else if (letters.includes(input.value[input.start])) {
        //there is only tachkil
        setInput(({ value, start, ...others }) => ({
          ...others,
          start: start,
          value: value.slice(0, start) + letter + value.slice(start + 1),
        }));
      } else if (
        input.value[input.start] === chada &&
        !letters.includes(input.value[input.start + 1])
      ) {
        //there is only chada
        setInput(({ value, start, ...others }) => ({
          ...others,
          start: start,
          value: value.slice(0, start + 1) + letter + value.slice(start + 1),
        }));
      } else if (
        input.value[input.start] === chada &&
        letters.includes(input.value[input.start + 1])
      ) {
        // there is tachkil and chada
        setInput(({ value, start, ...others }) => ({
          ...others,
          start: start,
          value: value.slice(0, start + 1) + letter + value.slice(start + 2),
        }));
      } else throw Error("invalid tachkil");
    } //insert chada
    else if (input.value[input.start] !== chada) {
      //there is no chada
      setInput(({ value, start, ...others }) => ({
        ...others,
        start: start,
        value: value.slice(0, start) + letter + value.slice(start),
      }));
    }
  }
  const stringCol = useMemo(() => {
    // get colored string
    const str = [];
    for (let i = 0; i < input.value.length; i++) {
      if (i === getLetterPos(input.start) - 1) {
        str.push(
          <span key={i} className=" text-green-600">
            {input.value[i]}
          </span>
        );
      } else if (
        !cLetters.includes(input.value[i]) &&
        ((i + 1 < input.value.length &&
          !cLetters.includes(input.value[i + 1])) ||
          input.value[i + 1] === undefined)
      ) {
        str.push(
          <span key={i} className=" text-red-600">
            {input.value[i]}
          </span>
        );
      } else str.push(<span key={i}>{input.value[i]}</span>);
    }
    return str;
  }, [getLetterPos, input.start, input.value]);
  const createButtons = cLetters.map((letter, i) => (
    <button
      key={i}
      className="border-black relative border-2 mt-10 mx-2 w-[50px] h-[50px] text-[30px]"
      onClick={() => updateValue(letter)}
    >
      <div>{letter}</div>
      <div className="bg-black px-1 absolute text-white -bottom-2 -left-1 text-sm">
        {i + 1}
      </div>
    </button>
  ));
  function getDirection(key) {
    //change char that you want to chekel with keyboard
    if (key === "ArrowRight") {
      if (input.value[input.start - 2] !== " ") setStart(input.start - 1);
      else setStart(input.start - 2);
    }
    if (key === "ArrowLeft") {
      let i = input.start;
      for (; i < input.value.length && cLetters.includes(input.value[i]); i++);
      setStart(i + 1);
    }
  }
  function deleteChar(key) {
    //delete tachkil
    if (
      (key === "Backspace" || key === "9") &&
      cLetters.includes(input.value[input.start])
    ) {
      setInput(({ value, start, ...others }) => ({
        ...others,
        start: start,
        value: value.slice(0, start) + value.slice(start + 1),
      }));
    }
  }
  return (
    <div
      className="mt-32 outline-none"
      tabIndex="0"
      onKeyDown={({ key }) => {
        if (key && ["1", "2", "3", "4", "5", "6", "7", "8"].includes(key))
          updateValue(cLetters[Number(key) - 1]);
        getDirection(key);
        deleteChar(key);
      }}
    >
      <div className="relative w-52 mx-auto">
        <div className="border-black -z-0  bg-white left-0 absolute top-0 border-2 text-right w-52 mx-auto">
          {stringCol}
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
        />
      </div>

      <div>
        {createButtons}
        <button
          className="border-black relative border-2  mx-2 w-[50px] h-[50px]"
          onClick={() => deleteChar("9")}
        >
          <BackspaceIcon className="absolute top-[1%] w-15 " />
          <div className="bg-black px-1 absolute text-white -bottom-2 -left-1 text-sm">
            {9}
          </div>
        </button>
      </div>
    </div>
  );
}
