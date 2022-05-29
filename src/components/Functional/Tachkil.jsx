import { useState, useMemo, useCallback, useEffect } from "react";
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
export function postFix(result) {
  return result.split(/\n|[*]/);
}
function setCharAt(str, index, chr) {
  if (index > str.length - 1) return str;
  return str.slice(0, index) + chr + str.slice(index + 1);
}
export function preFix(init) {
  init = init
    .trim()
    .split(/ +/)
    .join(" ")
    .split(/\n | \n/)
    .join("\n");
  for (let i = 0; i < init.length - 1; i++) {
    if (letters.includes(init[i]) && init[i + 1] === chada) {
      init = setCharAt(init, i + 1, init[i]);
      init = setCharAt(init, i, chada);
    }
  }
  return init;
}
const cLetters = [...letters, "\u0651"];
const chada = "\u0651";
export default function Tachkil({ init = "", setValue }) {
  const [input, setInput] = useState({
    value: preFix(init),
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
  useEffect(() => {
    setInput(({ start }) => ({ start, value: preFix(init) }));
  }, [init]);
  const setStart = useCallback(
    (select) => {
      if (select) {
        let start = 0;
        if (
          select <= 0 ||
          input.value[select - 1] === " " ||
          input.value[select - 1] === "\n" ||
          input.value[select - 1] === "*"
        )
          start = select + 1;
        else if (select > input.value.length) {
          start = getLetterPos(input.value.length);
        } else {
          start = getLetterPos(select);
        }
        setInput((input) => ({ ...input, start }));
      }
    },
    [getLetterPos, input.value]
  );

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
      if (input.value[i] === "\n") str.push(<br key={i} />);
      else if (i === getLetterPos(input.start) - 1) {
        str.push(
          <span
            onClick={() => {
              setStart(i + 1);
            }}
            key={i}
            className="bg-green-100 text-green-600 cursor-pointer"
          >
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
          <span
            onClick={() => {
              setStart(i + 1);
            }}
            key={i}
            className="text-red-600 cursor-pointer"
          >
            {input.value[i]}
          </span>
        );
      } else
        str.push(
          <span
            onClick={() => {
              setStart(i + 1);
            }}
            key={i}
            className="cursor-pointer"
          >
            {input.value[i]}
          </span>
        );
    }
    return str;
  }, [getLetterPos, input.start, input.value, setStart]);
  const createButtons = cLetters
    .map((letter, i) => (
      <button
        key={i}
        className="border-[#A58453] rounded-sm relative border-2 mx-2 w-[50px] h-[50px] text-[30px]"
        onClick={() => updateValue(letter)}
      >
        <div>{letter}</div>
        <div className="bg-[#A58453] rounded-sm px-1 absolute text-white -bottom-2 -right-2  text-sm">
          {i + 1}
        </div>
      </button>
    ))
    .reverse();
  function getDirection(key) {
    //change char that you want to chekel with keyboard
    if (key === "ArrowRight") {
      if (
        input.value[input.start - 2] === " " ||
        input.value[input.start - 2] === "\n" ||
        input.value[input.start - 2] === "*"
      ) {
        setStart(input.start - 2);
      } else setStart(input.start - 1);
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
      className="outline-none mt-2 mb-16"
      tabIndex="0"
      onKeyDown={({ key }) => {
        if (key && ["1", "2", "3", "4", "5", "6", "7", "8"].includes(key))
          updateValue(cLetters[Number(key) - 1]);
        getDirection(key);
        deleteChar(key);
      }}
    >
      <div className="mb-1 mr-32 ml-20">
        كيفية التشكيل : اضغط على حرف أو استعمل أسهم لوحة المفاتيح لاختيار الحرف
        الذي تريد تغيير تشكيله
      </div>
      <div className="flex justify-end mx-auto">
        <div
          style={{ direction: "rtl" }}
          className="border-[#A58453] p-3 w-[22.5em] rounded-md text-center text-2xl bg-[#FBFAF8] border-2 "
        >
          {stringCol}
        </div>
        <h3 className="ml-5 mt-4 text-xl text-[#A58453] text-center">
          التشكيل
        </h3>
      </div>
      <div className="text-red-700 mr-32">
        تحذير: عدم تصحيح التشكيل قد يأثر على دقّة النتيجة
      </div>
      <div className="flex items-center justify-end mx-auto mt-10">
        <button
          className="bg-[#A58453] border-[#A58453] rounded-sm text-white text-lg relative border-2 mx-2 w-[50px] h-[50px] hover:animate-ping-once"
          onClick={() => {
            setValue(input.value);
          }}
        >
          تم
        </button>
        <button
          className="border-[#A58453] rounded-sm relative border-2  mx-2 w-[50px] h-[50px]"
          onClick={() => deleteChar("9")}
        >
          <BackspaceIcon className="absolute rotate-180 text-[#A58453]  top-[1%] w-15 " />
          <div className="bg-[#A58453] px-1 absolute text-white -bottom-2 -right-2 text-sm">
            {9}
          </div>
        </button>
        {createButtons}
      </div>
    </div>
  );
}
