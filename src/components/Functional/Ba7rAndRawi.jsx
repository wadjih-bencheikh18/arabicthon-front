import OutputResult from "./OutputResult";
import InputResult from "./InputResult";
import { useState } from "react";
import axios from "axios";

export default function WaznAndRawi() {
  const [data, setData] = useState({});
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
              axios
                .post(
                  "https://c866-105-235-129-52.eu.ngrok.io/poemGenerationWazn",
                  {
                    params: { lines, rhyme: data.rhyme, meter: data.meter },
                  }
                )
                .then((response) => {
                  let result = response.data;
                  setData((data) => ({ ...data, result }));
                })
                .catch((error) => {
                  alert(error);
                });
            }}
          />
        </div>
        <OutputResult
          minHeight={15}
          maxWidth={75}
          className="text-right"
          title="الشعر"
          value={data.result}
        />
      </div>
    </div>
  );
}
