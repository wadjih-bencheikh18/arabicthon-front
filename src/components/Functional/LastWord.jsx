import OutputResult from "./OutputResult";
import InputResult from "./InputResult";
import { useState } from "react";
import { ChevronDoubleLeftIcon } from "@heroicons/react/solid";

export default function LastWord() {
  const [show, setShow] = useState("false");

  return (
    <div className="h-screen flex flex-col justify-center pb-16">
      <div className="text-right mb-14 mr-64 text-3xl text-[#A58453]">
        إكمال آخر كلمة بيت بناء على بحر و حرف الروي
      </div>
      <div className="mx-96 grid grid-cols-4 grid-rows-4 gap-y-3">
        <div className="col-span-4">
          <InputResult minWidth={200} maxHeight={1} title="البيت" />
        </div>
        <div className="justify-self-start">
          <InputResult
            minWidth={20}
            maxHeight={1}
            title="حرف الروي"
            className="overflow-hidden"
          />
        </div>
        <div className="col-span-2 col-start-3 flex flex-row-reverse justify-self-end">
          <div className="text-xl -mr-28 ml-20 pt-2 text-[#A58453]">البحر</div>
          <select className="rounded-lg text-right bg-[#FBFAF8] w-80 p-4">
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
        <button
          onClick={() => {
            setShow("true");
          }}
          className="btn flex rounded-md items-center justify-center w-12 h-6 text-white text-lg bg-[#A58453] -mb-3 -mr-9"
        >
          <ChevronDoubleLeftIcon className="w-5 h-5" />
        </button>
        {show === "true" ? (
          <div className="col-span-4 row-start-4">
            <OutputResult minWidth={200} maxHeight={1} title="البيت" />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
