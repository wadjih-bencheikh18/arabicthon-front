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
export default function AnalysePoemFull({ activate }) {
  const [data, setData] = useState({});
  return (
    <div className="h-screen flex flex-col items-center">
      <InputResult
        setValue={(input) => setData((data) => ({ ...data, input }))}
        button
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
  );
}
