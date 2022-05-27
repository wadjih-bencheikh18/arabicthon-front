import { CloudUploadIcon } from "@heroicons/react/outline";

import { useState, useCallback } from "react";
import OutputResult from "./OutputResult";
import { useDropzone } from "react-dropzone";
export default function GenImage() {
  const [image, setImage] = useState(undefined);
  const onDrop = useCallback((files) => {
    files.forEach((file) => {
      if (file.type.startsWith("image")) {
        setImage(URL.createObjectURL(file));
      }
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  return (
    <div className="grid grid-cols-2 grid-rows-1 items-center mx-auto ">
      <div className="w-96 col-start-1 m-4 justify-self-center">
        <OutputResult value={"test"} className="bg-green-600" />
      </div>
      <div className=" col-start-2 m-5 justify-self-center">
        <section className="container">
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {image ? (
              <img alt="input" src={image} />
            ) : (
              <div className="p-10  border-2 text-white rounded-lg bg-[#A58453] border-[#A58453] flex flex-col justify-center">
                <CloudUploadIcon className="w-20 m-auto " />
                <p>Drop the files here</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
