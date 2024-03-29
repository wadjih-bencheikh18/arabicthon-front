import InputResult from "./InputResult";
import { useState } from "react";
import axios from "axios";
import Load from "../../pics/load.svg";
import BackURL from "./Backend";
import Chiir from "./Chiir";
export default function Rawi() {
  const [data, setData] = useState({
    meter: "الكامل",
    sujet: "",
  });
  const [load, setLoad] = useState(false);
  return (
    <div className="h-screen flex flex-col justify-start transform transition-all duration-1000 ease-in-out">
      <div className="text-right mt-36 mb-16  mr-64 text-3xl pb-6 text-[#A58453]">
        تأليف الشعر بناء على حرف الروي
      </div>
      <div className="flex-row-reverse flex justify-start mr-44 items-center gap-32">
        <div className="flex flex-col space-y-8">
          <InputResult
            minWidth={12}
            maxHeight={1}
            title="حرف الروي"
            className="overflow-hidden"
            setUpdate={(rhyme) => setData((data) => ({ ...data, rhyme }))}
          />
          <InputResult
            right={false}
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
        <div className="flex w-[700px] min-h-[300px] justify-center mr-32">
          {load && <img className="" alt="load" src={Load}></img>}

          {!load && (
            <div className="flex flex-row-reverse ">
              <div className="text-2xl text-[#A58453] ml-5">الشعر</div>
              <Chiir
                result={data.result ? data.result.split("*").join("") : ""}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
