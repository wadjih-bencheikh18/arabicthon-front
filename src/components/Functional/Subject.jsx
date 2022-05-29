import Chiir from "./Chiir";
import InputResult from "./InputResult";
import { useState } from "react";
import axios from "axios";
import Load from "../../pics/load.svg";
import BackURL from "./Backend";
export default function Subject() {
  const [data, setData] = useState({
    meter: "الكامل",
  });
  const [load, setLoad] = useState(false);
  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="text-right mb-0 mr-64 text-3xl pb-6 text-[#A58453]">
        تأليف الشعر بناء على موضوع
      </div>
      <div className="flex-row-reverse flex justify-center items-center gap-x-72">
        <div className="flex flex-col space-y-10">
          <InputResult
            minWidth={30}
            maxHeight={1}
            title="الموضوع"
            className="overflow-hidden"
            setUpdate={(sujet) => setData((data) => ({ ...data, sujet }))}
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
            maxHeight={1}
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
                .post(BackURL + "/poemGeneration", {
                  params: {
                    lines,
                    rhyme: data.rhyme,
                    meter: data.meter,
                    sujet: data.sujet,
                  },
                })
                .then((response) => {
                  let result = response.data;
                  setData((data) => ({ ...data, result }));
                  setLoad(false);
                })
                .catch((error) => {
                  alert(error);
                  setLoad(false);
                });
            }}
          />
        </div>
        <div className="flex w-[700px]  justify-center">
          {load && <img className="" alt="load" src={Load}></img>}
          {!load && <Chiir result={data.result ? data.result : ""} />}
        </div>
      </div>
    </div>
  );
}
