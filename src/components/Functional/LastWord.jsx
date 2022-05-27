import OutputResult from "./OutputResult";
import InputResult from "./InputResult";

export default function LastWord() {
  return (
    <div className="w-screen pt-28">
      <div className="text-right mb-8 mr-64 text-3xl text-[#A58453]">
        إكمال آخر كلمة بيت بناء على وزن و حرف الروي
      </div>
      <div className="grid w-screen grid-cols-2 grid-rows-1 items-center mx-auto">
        <InputResult cols={12} rows={1} init="5" button />
      </div>
    </div>
  );
}
