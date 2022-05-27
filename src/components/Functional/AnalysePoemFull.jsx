import { useState } from "react";
import InputResult from "./InputResult";
import OutputResult from "./OutputResult";
import Tachkil from "./Tachkil";
const choices = [
  "bahrDL",
  "tachkil",
  "kitaba 3arodiya",
  "ta9ti3",
  "taf3ilat",
  "bahr",
];
export default function AnalysePoemFull() {
  const [data, setData] = useState({});
  const [activate, setActivate] = useState([
    false,
    true,
    false,
    false,
    false,
    false,
  ]);
  return (
    <div className="h-screen flex flex-col items-center">
      <div className="flex gap-5">
        {choices.map((c, i) => (
          <div
            className={`rounded-lg px-3 hover:bg-[rgba(165,132,83,0.6)] cursor-pointer py-1 ${
              activate[i]
                ? "bg-[rgba(165,132,83,1)]"
                : "bg-[rgba(165,132,83,0.3)] "
            }`}
            key={i}
            onClick={() => {
              setActivate((activate) => {
                activate[i] = !activate[i];
                return activate;
              });
            }}
          >
            {c}
          </div>
        ))}
      </div>
      <div className="h-screen flex items-center">
        <InputResult
          setValue={(input) => {
            setData((data) => ({ ...data, input }));
          }}
        />
        {data.input && (
          <Tachkil
            init={data.input}
            setValue={(tachkil) => {
              setData((data) => ({ ...data, tachkil }));
            }}
          />
        )}
        {data.tachkil && <OutputResult value={data.tachkil} />}
      </div>
    </div>
  );
}