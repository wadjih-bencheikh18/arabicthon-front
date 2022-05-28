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
        تأليف الشعر بناء على بحر و حرف الروي
      </div>
      <div className="flex-row-reverse flex justify-center items-center gap-x-72">
        <div className="flex flex-col space-y-8">
          <div className="flex flex-row-reverse">
            <div className="text-xl -mr-28 ml-20 pt-2 text-[#A58453]">
              البحر
            </div>
            <select className="rounded-lg text-right bg-[#FBFAF8] w-32 p-4">
              <option value="tawiil">الطويل</option>
              <option value="madiid">المديد</option>
              <option value="basiit">البسيط</option>
              <option value="wafir">الوافر</option>
              <option value="kaamil">الكامل</option>
              <option value="hazj">الهزج</option>
              <option value="rajz">الرجز</option>
              <option value="raml">الرمل</option>
              <option value="sariie">السريع</option>
              <option value="munsarih">المنسرح</option>
              <option value="khafiif">الخفيف</option>
              <option value="mujdath">المجتث</option>
              <option value="mutaqaarib">المتقارب</option>
              <option value="mutadaarik">المتدارك</option>
            </select>
          </div>
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
