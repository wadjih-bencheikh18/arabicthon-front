import { useState } from "react";

export default function Tachkil() {
  const [input, setInput] = useState({
    letters: ["a", "b", "c", "d", "e"],
    value: "",
  });

  function updateValue(letter) {
    console.log("ran");
    setInput(({ value, letters }) => ({
      letters,
      value: value + letter,
    }));
  }

  const createButtons = input.letters.map((letter) => (
    <button onClick={() => updateValue(letter)}>{letter}</button>
  ));

  return (
    <div>
      {createButtons}
      <input style={{ border: "2px solid red" }} value={input.value} />
    </div>
  );
}
