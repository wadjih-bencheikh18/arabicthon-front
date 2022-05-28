import OutputResult from "./OutputResult";
import InputResult from "./InputResult";

export default function Subject() {
  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="text-right mb-0 mr-64 text-3xl pb-6 text-[#A58453]">
        تأليف الشعر بناء على موضوع
      </div>
      <div className="flex-row-reverse flex justify-center items-center gap-x-72">
        <div className="flex flex-col space-y-10">
          <InputResult
            minWidth={30}
            maxHeight={1}
            title="الموضوع"
            className="overflow-hidden"
          />
          <InputResult
            maxWidth={12}
            minHeight={1}
            init="5"
            button
            title="عدد الأبيات"
            className="overflow-hidden"
          />
        </div>
        <OutputResult
          value=""
          minHeight={15}
          maxWidth={75}
          className="text-right"
          title="الشعر"
        />
      </div>
    </div>
  );
}
