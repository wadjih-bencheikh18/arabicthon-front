import { CloudUploadIcon } from "@heroicons/react/outline";

import Load from "../../pics/load.svg";
import { useState, useCallback } from "react";
import OutputResult from "./OutputResult";
import { useDropzone } from "react-dropzone";
import InputResult from "./InputResult";
import axios from "axios";
import BackURL from "./Backend";
export default function GenImage() {
  const [data, setData] = useState({ undefined });

  const [load, setLoad] = useState(false);
  const onDrop = useCallback((files) => {
    files.forEach((file) => {
      if (file.type.startsWith("image")) {
        setData((data) => ({ ...data, image: URL.createObjectURL(file) }));
      }
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  return (
    <div className="w-screen">
      <div className="text-right mb-8 mr-64 text-3xl text-[#A58453]">
        تأليف الشعر بناء على صورة
      </div>
      <div className="grid w-screen grid-cols-2 grid-rows-1 items-center mx-auto">
        <div className="col-start-1 relative justify-self-center ml-44">
          {load && (
            <img
              className="absolute z-10 bg-transparent top-30 left-16"
              alt="load"
              src={Load}
            ></img>
          )}
          <OutputResult
            value={data.result}
            minHeight={15}
            maxWidth={75}
            className="text-right"
            title="الشعر"
          />
        </div>
        <div className="col-start-2 flex flex-col items-center justify-end justify-self-center space-y-10">
          <div className=" cursor-pointer">
            <section className="container">
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <div className="relative">
                  {data.image ? (
                    <img
                      className="rounded-lg max-h-80"
                      alt="input"
                      src={data.image}
                    />
                  ) : (
                    <div className="p-10 h-64 w-72 text-[#A58453] font-light text-xl text-center rounded-3xl border-2 border-[#A58453] flex flex-col justify-center">
                      {!isDragActive && (
                        <p>
                          اختر ملف
                          <br />
                          أو اسحبه هنا
                        </p>
                      )}
                    </div>
                  )}
                  {isDragActive && (
                    <div className="absolute top-0 bottom-0 left-0 right-0 p-10 text-white rounded-3xl font-light bg-[rgba(165,132,83,0.5)] flex flex-col justify-center">
                      <CloudUploadIcon className="w-20 m-auto" />
                      <p>Drop the files here</p>
                    </div>
                  )}
                </div>
              </div>
            </section>
          </div>
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
                .post(BackURL + "/caption", {
                  params: {
                    lines,
                    image: data.image,
                  },
                })
                .then((response) => {
                  let result = response.data;
                  console.log(result);
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
      </div>
    </div>
  );
}
