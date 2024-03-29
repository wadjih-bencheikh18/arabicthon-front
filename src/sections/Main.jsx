import bg from "../pics/background.png";
import book from "../pics/book.png";

export function Main() {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="hidden lg:block absolute -bottom-[350px] -right-[450px]">
        <img src={bg} alt="" className="relative scale-125" />
      </div>
      <div className="relative z-20">
        <div className="flex z-10 h-screen items-center justify-center overflow-hidden">
          <div className="hidden lg:block">
            <img
              src={book}
              alt=""
              className="max-w-[55em] max-mr-[50em] mt-52"
            />
          </div>
          {/* text */}
          <div className="text-right mr-52 mb-20">
            <div className="text-[46px] mb-10 text-[#A58453]">الشاعر الآلي</div>
            <div className="text-xl">
              الشاعر الآلي موقع الكتروني لتأليف و تحليل القصائد آليا باستعمال
              الذكاء الاصطناعي بناء على مختلف خصائصه
            </div>
            <a href="/create-analyse">
              <button className="btn rounded-md mt-16 py-3 px-6 text-white text-xl bg-[#A58453] hover:animate-ping-once">
                تجريب
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
