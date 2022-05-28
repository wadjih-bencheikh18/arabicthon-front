import axios from "axios";
import { useState } from "react";
import InputResult from "./InputResult";
import TableArray from "./Table";
import Tachkil, { postFix, preFix } from "./Tachkil";

import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Analyse({ activate }) {
  const [data, setData] = useState({});

  return (
    <div className="bg-[#E4D3C1] pt-16 flex flex-col items-center">
      <InputResult
        setValue={(input) => {
          if (input) {
            alert("test");
            axios
              .post("https://c866-105-235-129-52.eu.ngrok.io/tachkil", {
                params: {
                  text: postFix(preFix(input)),
                },
              })
              .then((response) => {
                const input = response.data;
                alert(input);
                setData((data) => ({ ...data, input }));
              })
              .catch((error) => {
                alert(error);
              });
          }
        }}
        title="الشعر"
        button
      />
      {data.input && (
        <Tachkil
          init={data.input}
          setValue={(tachkil) => {
            alert(tachkil);
            setData((data) => ({ ...data, tachkil }));
            axios
              .post("https://c866-105-235-129-52.eu.ngrok.io/ultimateAroud", {
                params: {
                  text: postFix(tachkil),
                },
              })
              .then((response) => {
                let result = response.data;
                result = Object.keys(result).map(function (key) {
                  return result[key];
                });
                console.log(result);
                setData((data) => ({ ...data, result }));
              })
              .catch((error) => {
                alert(error);
              });
          }}
        />
      )}
      <div className="relative w-3/5">
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {data.result &&
            data.result.map((r) => (
              <SwiperSlide className="flex justify-center mb-10 text-black">
                <TableArray {...r} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}
