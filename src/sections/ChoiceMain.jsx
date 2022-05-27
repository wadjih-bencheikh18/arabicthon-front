export function ChoiceMain() {
  return (
    <div className="flex h-screen space-x-2 justify-center items-center">
      <a
        href="/analyse"
        className="bg-[#FBFAF8] w-80 h-72 flex items-center justify-center text-2xl rounded-l-[60px] hover:text-3xl hover:w-96 hover:h-80"
      >
        تحليل شعر
      </a>
      <a
        href="/create"
        className="bg-[#FBFAF8] w-80 h-72 flex items-center justify-center text-2xl rounded-r-[60px] hover:text-3xl hover:w-96 hover:h-80"
      >
        تأليف شعر
      </a>
    </div>
  );
}
