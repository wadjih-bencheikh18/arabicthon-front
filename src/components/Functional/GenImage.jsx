import { CloudUploadIcon } from "@heroicons/react/outline";
import Chiir from "./Chiir";
import Load from "../../pics/load.svg";
import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import InputResult from "./InputResult";
import axios from "axios";
import BackURL from "./Backend";
function blobToBase64(blob) {
  return new Promise((resolve, _) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
}
export default function GenImage() {
  const [data, setData] = useState({ rhyme:"ر" });

  const [load, setLoad] = useState(false);
  const onDrop = useCallback((files) => {
    files.forEach(async (file) => {
      if (file.type.startsWith("image")) {
        let reader = await blobToBase64(file);
        setData((data) => ({
          ...data,
          image: URL.createObjectURL(file),
          file: reader,
        }));
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
        <div className="col-start-1 min-h-[300px] ml-36 flex justify-self-center justify-center w-[700px]">
          {load && <img className="" alt="load" src={Load}></img>}
          {!load && (
            <div className="flex flex-row-reverse">
              <div className="text-2xl text-[#A58453] ml-5">الشعر</div>
              <Chiir
                result={data.result ? data.result.split("*").join("") : ""}
              />
            </div>
          )}
        </div>
        <div className="col-start-2 flex flex-col items-center justify-end justify-self-center space-y-10">
          <div className="cursor-pointer">
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
                    <div className="absolute top-0 bottom-0 left-0 right-0 p-10 text-white font-light text-xl text-center rounded-3xl bg-[rgba(165,132,83,0.5)] flex flex-col justify-center">
                      <CloudUploadIcon className="w-20 m-auto" />
                      <p>اسحب الملف هنا</p>
                    </div>
                  )}
                </div>
              </div>
            </section>
          </div>
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
              setData((data) => ({ ...data, lines: Number(lines) + 1 }))
            }
            setValue={(lines) => {
              setLoad(true);
              axios
                .post(BackURL + "/caption", {
                  params: {
                    lines: Number(lines) + 1,
                    file: data.file,
                    rhyme: data.rhyme,
                  },
                })
                .then((response) => {
                  const result = response.data.split("\n").slice(1).join("\n");
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
