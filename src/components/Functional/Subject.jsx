import OutputResult from "./OutputResult";
import InputResult from "./InputResult";

export default function Subject() {
  return (
    <div className="h-screen flex flex-col justify-center pb-16">
      <div className="text-right mb-14 mr-64 text-3xl text-[#A58453]">
        تأليف الشعر بناء على موضوع
      </div>
      <div className="mx-72 grid grid-cols-2 grid-flow-row-dense place-items-center gap-x-40">
        <div className="col-start-2 flex flex-col space-y-10">
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
        <div className="col-start-1 row-span-2">
          <OutputResult
            value=""
            minHeight={15}
            maxWidth={75}
            className="text-right"
            title="الشعر"
          />
        </div>
      </div>
    </div>
  );
}
