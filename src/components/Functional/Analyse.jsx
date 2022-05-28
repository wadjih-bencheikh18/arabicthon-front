import axios from "axios";
import { useEffect, useState } from "react";
import InputResult from "./InputResult";
import TableArray from "./Table";
import Tachkil, { postFix, preFix } from "./Tachkil";

import OutputResult from "./OutputResult";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Analyse({ activate=[1,2,3,4] }) {
  const [data, setData] = useState({});
  useEffect(() => {if(data.tachkil&&
        !activate.includes(0) &&
        activate.length >0 ){
            axios
              .post("https://c866-105-235-129-52.eu.ngrok.io/ultimateAroud", {
                params: {
                  text: postFix(data.tachkil),
                },
              })
              .then((response) => {
                let result = response.data;
                result = Object.keys(result).map(function (key) {
                  return result[key];
                });
                setData((data) => ({ ...data, result }));
              })
              .catch((error) => {
                alert(error);
              });
          }
        }, [activate, data.tachkil]);
  return (
    <div className="bg-[#E4D3C1] pt-16 flex flex-col items-center">
      <InputResult
        setValue={(input) => {
          setData((data) => ({ ...data, input }));
          if (input) {
            axios
              .post("https://c866-105-235-129-52.eu.ngrok.io/tachkil", {
                params: {
                  text: postFix(preFix(input)),
                },
              })
              .then((response) => {
                const tachkil = response.data.trim();
                setData((data) => ({ ...data, tachkil }));
              })
              .catch((error) => {
                alert(error);
              });
          }
        }}
        title="الشعر"
        button
      />
      {activate.length === 1 && activate.includes(0) && data.tachkil && (
        <OutputResult value={data.tachkil} title="التشكيل" />
      )}
      {data.tachkil && activate.includes(0) && activate.length !== 1 && (
        <Tachkil
          init={data.tachkil}
          setValue={(tachkilFixed) => {
            setData((data) => ({ ...data, tachkilFixed }));
            axios
              .post("https://c866-105-235-129-52.eu.ngrok.io/ultimateAroud", {
                params: {
                  text: postFix(tachkilFixed),
                },
              })
              .then((response) => {
                let result = response.data;
                result = Object.keys(result).map( (key) =>{
                  return result[key];
                });
                setData((data) => ({ ...data, result }));
              })
              .catch((error) => {
                alert(error);
              });
          }}
        />
      )}
      {data.result && (
        <div className="relative w-[500px]">
          <Swiper
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {data.result.map((r) => (
              <SwiperSlide className="flex justify-center mb-10 text-black">
                <TableArray {...r} activate={activate} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
}
