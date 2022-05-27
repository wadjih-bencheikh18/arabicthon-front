import feather from "../pics/feather.svg";
import { CogIcon, SearchIcon } from "@heroicons/react/outline";
export function ChoiceMain() {
  return (
    <div className="grid grid-cols-2 grid-rows-1 mx-auto h-screen space-x-2  items-center">
      <a
        href="/analyse"
        className="group col-start-1 col-end-1 justify-self-end bg-[#FBFAF8] w-80 h-72 flex flex-col  gap-6 transition-all duration-500 ease-in-out items-center justify-center text-2xl rounded-l-[40px] hover:text-3xl  hover:w-96 hover:h-80"
      >
        تحليل شعر
        <div className="relative mr-3">
          <SearchIcon className="absolute right-1 group-hover:right-1 -bottom-4 text-[#A58453] w-10 group-hover:w-12 group-hover:-translate-x-3 group-hover:-translate-y-3 transition-all duration-500 ease-in-out" />
          <img
            className="w-20 group-hover:w-24 transition-all duration-500 ease-in-out"
            alt="feather"
            src={feather}
          ></img>
        </div>
      </a>
      <a
        href="/create"
        className="group justify-self-start col-start-2 col-end-2 bg-[#FBFAF8] w-80 h-72 flex flex-col gap-6 transition-all duration-500 ease-in-out items-center justify-center text-2xl rounded-r-[40px] hover:text-3xl hover:w-96 hover:h-80"
      >
        تأليف شعر
        <div className="relative mr-3">
          <CogIcon className="absolute right-1 group-hover:right-1 -bottom-4 text-[#A58453] w-10 group-hover:w-12  group-hover:rotate-90 transition-all duration-500 ease-in-out" />
          <img
            className="w-20  group-hover:w-24 transition-all duration-500 ease-in-out"
            alt="feather"
            src={feather}
          ></img>
        </div>
      </a>
    </div>
  );
}
