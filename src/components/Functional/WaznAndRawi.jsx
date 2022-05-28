import OutputResult from "./OutputResult";
import InputResult from "./InputResult";
import { useState } from "react";
import axios from "axios";
import Load from "../../pics/load.svg";
export default function WaznAndRawi() {
  const [data, setData] = useState({ sujet: "" });
  const [load, setLoad] = useState(false);
  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="text-right mb-0 mr-64 text-3xl pb-6 text-[#A58453]">
        تأليف الشعر بناء على وزن و حرف الروي
      </div>
      <div className="flex-row-reverse flex justify-center items-center gap-x-72">
        <div className="flex flex-col space-y-8">
          <InputResult
            minWidth={50}
            maxHeight={1}
            title="الوزن"
            className="overflow-hidden"
            setUpdate={(meter) => setData((data) => ({ ...data, meter }))}
          />
          <InputResult
            minWidth={12}
            maxHeight={1}
            title="حرف الروي"
            className="overflow-hidden"
            setUpdate={(rhyme) => setData((data) => ({ ...data, rhyme }))}
          />
          <InputResult
            maxWidth={12}
            minHeight={1}
            init="5"
            button
            title="عدد الأبيات"
            className="overflow-hidden"
            setUpdate={(lines) =>
              setData((data) => ({ ...data, lines: Number(lines) }))
            }
            setValue={(lines) => {
              setLoad(true);
              axios
                .post(
                  "https://c866-105-235-129-52.eu.ngrok.io/poemGeneration",
                  {
                    params: {
                      lines,
                      rhyme: data.rhyme,
                      meter: data.meter,
                      sujet: data.sujet,
                    },
                  }
                )
                .then((response) => {
                  let result = response.data;
                  setData((data) => ({ ...data, result }));
                  setLoad(false);
                })
                .catch((error) => {
                  alert(error);
                });
            }}
          />
        </div>
        <div className="relative">
          {load && (
            <img
              className="absolute z-10 bg-transparent top-30 left-16"
              alt="load"
              src={Load}
            ></img>
          )}
          <OutputResult
            minHeight={15}
            maxWidth={75}
            className="text-right"
            title="الشعر"
            value={load? "":data.result}
          />
        </div>
      </div>
    </div>
  );
}
