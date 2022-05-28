import OutputResult from "./OutputResult";
import InputResult from "./InputResult";

export default function Ba7rDounTachkil() {
  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="text-right mb-0 mr-64 text-3xl pb-6 text-[#A58453]">
        التعرف على بحر شعر دون تشكيل
      </div>
      <div className="flex-row-reverse flex justify-center items-center gap-x-72">
        <InputResult
          value=""
          minHeight={15}
          maxWidth={75}
          className="text-right"
          title="الشعر"
          button
        />
        <div className="flex flex-col space-y-10">
          <InputResult
            minWidth={30}
            maxHeight={1}
            title="البحر"
            className="overflow-hidden"
          />
        </div>
      </div>
    </div>
  );
}
