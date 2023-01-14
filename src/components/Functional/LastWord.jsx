import OutputResult from "./OutputResult";
import InputResult from "./InputResult";
import { useState } from "react";
import axios from "axios";
import Load from "../../pics/load.svg";
import { postFix, preFix } from "./Tachkil";
import BackURL from "./Backend";
export default function LastWord() {
  const [show, setShow] = useState(false);
  const [load, setLoad] = useState(false);
  const [data, setData] = useState({ meter: "الطويل" });
  return (
    <div className="h-screen flex flex-col justify-center pb-16">
      <div className="text-right mb-14 mr-64 text-3xl text-[#A58453]">
        إكمال البيت بناء على بحر و حرف الروي
      </div>
      <div className="mx-96 grid grid-cols-4 grid-rows-4 gap-y-3">
        <div className="col-span-4">
          <InputResult
            minWidth={200}
            maxHeight={1}
            title="البيت"
            setUpdate={(sujet) =>
              setData((data) => ({
                ...data,
                sujet: postFix(
                  preFix(
                    sujet
                      .split(
                        /[_]+|[-]+|[,]+|[*]+|[;]+|[.]+|[|]+|[/]+|[\\]+|\t+/
                      )
                      .join("*")
                  )
                ),
              }))
            }
          />
        </div>
        <div className=" col-span-2  justify-self-start ">
          <InputResult
            minWidth={10}
            maxHeight={1}
            title="حرف الروي"
            className="overflow-hidden"
            setUpdate={(rhyme) => setData((data) => ({ ...data, rhyme }))}
            button
            setValue={(rhyme) => {
              setLoad(true);
              axios
                .post(BackURL + "/lastword", {
                  params: {
                    rhyme: rhyme,
                    meter: data.meter,
                    right: data.sujet[0],
                    left: data.sujet[1],
                  },
                })
                .then((response) => {
                  let result = response.data;
                  setData((data) => ({ ...data, result }));
                  setLoad(false);
                  setShow(true);
                })
                .catch((error) => {
                  setLoad(false);
                  alert(error);
                });
            }}
          />
        </div>
        <div className="col-span-2 col-start-3 flex flex-row-reverse justify-self-end mt-5">
          <div className="text-xl -mr-28 ml-20 pt-2 text-[#A58453]">البحر</div>
          <select
            onChange={({ target }) => {
              setData((data) => ({ ...data, meter: target.value }));
            }}
            className="rounded-lg h-14 text-right bg-[#FBFAF8] w-80 p-4"
          >
            <option value="الطويل">الطويل</option>
            <option value="المديد">المديد</option>
            <option value="البسيط">البسيط</option>
            <option value="الوافر">الوافر</option>
            <option value="الكامل">الكامل</option>
            <option value="الهزج">الهزج</option>
            <option value="الرجز">الرجز</option>
            <option value="الرمل">الرمل</option>
            <option value="السريع">السريع</option>
            <option value="المنسرح">المنسرح</option>
            <option value="الخفيف">الخفيف</option>
            <option value="المجتث">المجتث</option>
            <option value="المتقارب">المتقارب</option>
            <option value="المتدارك">المتدارك</option>
          </select>
        </div>
        {/* <button className="btn flex rounded-md items-center justify-center w-12 h-6 text-white text-lg bg-[#A58453] -mt-7 -ml-14">
          <ChevronDoubleLeftIcon className="w-5 h-5" />
        </button> */}

        {show && !load ? (
          <div className="col-span-4 row-start-4">
            <OutputResult
              value={data.result.split("*").join("")}
              minWidth={200}
              maxHeight={1}
              title="البيت"
            />
          </div>
        ) : null}
      </div>
      {load && <img className="h-32 -mt-24" alt="load" src={Load}></img>}
    </div>
  );
}
