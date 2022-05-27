export function ChoiceTa2lif() {
  const functionalities = [
    "k",
    "text1",
    "k",
    "text1",
    "k",
    "text1",
    "k",
    "text1",
    "k",
    "text1",
    "k",
    "text1",
    "k",
    "text1",
    "k",
    "text1",
    "k",
    "text1",
    "k",
    "text1",
  ];
  return (
    <div className="flex h-screen pt-10 justify-end items-center">
      <div className="text-right border-r-4 rounded-sm border-[#A58453] pr-8">
        <div className="text-3xl text-[#A58453]">تأليف شعر</div>
        <div className="text-lg">تأليف شعر</div>
      </div>
      {/* container */}
      <div className="flex flex-wrap flex-row-reverse h-[31.5rem] w-[54rem] mx-20 overflow-y-scroll items-center px-5 pt-4">
        {functionalities.map((functionality, key) => (
          <div
            key={key}
            className="bg-[#FBFAF8] rounded-[40px] w-60 h-56 flex justify-center items-center mr-6 mb-6"
          >
            {functionality}
          </div>
        ))}
      </div>
    </div>
  );
}
