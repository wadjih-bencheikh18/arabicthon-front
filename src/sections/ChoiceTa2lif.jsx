export function ChoiceTa2lif() {
  const functionalities = [
    { link: "k", text: "text1" },
    { link: "k", text: "text1" },
    { link: "k", text: "text1" },
    { link: "k", text: "text1" },
    { link: "k", text: "text1" },
    { link: "k", text: "text1" },
    { link: "k", text: "text1" },
    { link: "k", text: "text1" },
    { link: "k", text: "text1" },
    { link: "k", text: "text1" },
  ];
  return (
    <div className="flex h-screen pt-10 justify-end items-center">
      <div className="text-3xl">تأليف شعر</div>
      {/* container */}
      <div className="flex flex-wrap flex-row-reverse h-[31.5rem] w-[54rem] mx-20 overflow-y-scroll items-center px-5 pt-4">
        {functionalities.map((functionality, key) => (
          <a
            href={functionality.link}
            key={key}
            className="bg-[#FBFAF8] rounded-[40px] w-60 h-56 flex justify-center items-center mr-6 mb-6"
          >
            {functionality.text}
          </a>
        ))}
      </div>
    </div>
  );
}
