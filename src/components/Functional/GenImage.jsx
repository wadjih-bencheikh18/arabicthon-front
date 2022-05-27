import { CloudUploadIcon } from "@heroicons/react/outline";

import { useState, useCallback } from "react";
import OutputResult from "./OutputResult";
import { useDropzone } from "react-dropzone";
import InputResult from "./InputResult";
export default function GenImage() {
  const [image, setImage] = useState(undefined);
  const onDrop = useCallback((files) => {
    files.forEach((file) => {
      if (file.type.startsWith("image")) {
        setImage(URL.createObjectURL(file));
      }
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  return (
    <div className="w-full">
      <div className="text-right mb-8 mt-10 mr-72 text-xl text-[#A58453]">
        TITLE
      </div>
      <div className="grid w-screen grid-cols-2 grid-rows-1 items-center mx-auto">
        <div className="col-start-1 justify-self-end">
          <OutputResult
            value={"test"}
            rows="15"
            cols="90"
            className="text-right"
          />
        </div>
        <div className="col-start-2 flex flex-col items-center justify-end justify-self-center space-y-10">
          <div className="">
            <section className="container">
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <div className="relative">
                  {image ? (
                    <img
                      className="rounded-lg max-h-80"
                      alt="input"
                      src={image}
                    />
                  ) : (
                    <div className="p-10 h-64 w-72 text-[#A58453] rounded-3xl bg-[#FBFAF8] flex flex-col justify-center">
                      {!isDragActive && (
                        <p>
                          Drag and drop the files here <br />
                          or click to select a file
                        </p>
                      )}
                    </div>
                  )}
                  {isDragActive && (
                    <div className="absolute top-0 bottom-0 left-0 right-0 p-10 text-white rounded-3xl bg-[rgba(165,132,83,0.5)] flex flex-col justify-center">
                      <CloudUploadIcon className="w-20 m-auto" />
                      <p>Drop the files here</p>
                    </div>
                  )}
                </div>
              </div>
            </section>
          </div>
          <InputResult cols={12} rows={1} />
        </div>
      </div>
    </div>
  );
}
