export function ChoiceTa2lif() {
  const functionalities = [
    "text1",
    "text2",
    "jlk",
    "iukhj",
    "iuhk",
    "text2",
    "jlk",
    "iukhj",
    "iuhk",
    "text2",
    "jlk",
    "iukhj",
    "iuhk",
  ];
  return (
    <div className="flex h-screen mx-5 pt-10 justify-center items-center">
      <div className="w-full">text</div>
      {/* container */}
      <div className="flex flex-wrap h-[75%] mx-36 overflow-y-scroll items-center px-5 border-black border-2 pt-4">
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
