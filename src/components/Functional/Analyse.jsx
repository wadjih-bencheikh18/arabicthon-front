import axios from "axios";
import { useEffect, useState } from "react";
import InputResult from "./InputResult";
import TableArray from "./Table";
import Tachkil, { postFix, preFix } from "./Tachkil";

import OutputResult from "./OutputResult";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import BahrDl from "./BahrDL";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import BackURL from "./Backend";

export default function Analyse({ activate = [1, 2, 3, 4] }) {
  const [data, setData] = useState({});
  useEffect(() => {
    if (data.tachkil && !activate.includes(0) && activate.length > 0) {
      axios
        .post(BackURL + "/ultimateAroud", {
          params: {
            text: postFix(data.tachkil.split("*").join(" ")),
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
  const swiper =
    activate.includes(1) ||
    activate.includes(2) ||
    activate.includes(4) ||
    activate.includes(3);
  return (
    <div className="bg-[#E4D3C1] pt-16 flex flex-col w-[100%] items-center min-h-screen">
      <div className=" grid  w-full ">
        <div className="col-start-2 row-start-1 flex flex-col mr-4 gap-5 items-end ">
          <InputResult
            className="text-center"
            maxWidth={65}
            setValue={(input) => {
              const inputClean = preFix(
                input.split(/[_]+|[-]+|[,]+|[*]+|[;]+|[.]+|\t+/).join("*")
              );
              if (inputClean) {
                setData((data) => ({ ...data, input: inputClean }));
                axios
                  .post(BackURL + "/tachkil", {
                    params: {
                      text: postFix(inputClean),
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
          {data.input && activate.includes(5) && <BahrDl input={data.input} />}
        </div>
        <div className="col-start-1 row-start-1 ml-5">
          {!swiper && activate.includes(0) && data.tachkil && (
            <OutputResult maxWidth={60} value={data.tachkil} title="التشكيل" />
          )}
          {data.tachkil && activate.includes(0) && activate.length !== 1 && (
            <Tachkil
              init={data.tachkil}
              setValue={(tachkilFixed) => {
                setData((data) => ({ ...data, tachkilFixed }));
                axios
                  .post(BackURL + "/ultimateAroud", {
                    params: {
                      text: postFix(tachkilFixed),
                    },
                  })
                  .then((response) => {
                    let result = response.data;
                    result = Object.keys(result).map((key) => {
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
        </div>
      </div>

      {data.result && swiper && (
        <div className="relative w-[800px]">
          <Swiper
            pagination={{
              type: "fraction",
            }}
            loop
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {data.result.map((r) => (
              <SwiperSlide className="flex justify-center mb-10">
                <TableArray {...r} activate={activate} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
}
