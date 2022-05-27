import { useState } from "react";
import GenImage from "./GenImage";
import InputResult from "./InputResult";
import OutputResult from "./OutputResult";
import Tachkil from "./Tachkil";

export default function AnalysePoem() {
  const [data, setData] = useState({});
  return (
    <div>
      <GenImage />
      {/* 
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
      */}
    </div>
  );
}
