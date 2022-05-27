export function Main() {
  return (
    <div className="relative h-screen">
      {/* todo: fix postion and dimensions */}
      <div className="absolute w-full -bottom-[200px] -right-[200px]">
        <img src="./whiterectangle.png" alt="" className="relative" />
      </div>
      <div className="relative z-20">
        <div className="flex z-10 h-screen items-center justify-center overflow-hidden">
          <div className="hidden lg:block">
            <img
              src="./book.png"
              alt=""
              className="w-[100em] mr-[50em] mt-52"
            />
          </div>
          {/* text */}
          <div className="text-right mr-52 mb-32">
            <div className="text-3xl mb-10 text-[#A58453]">عنوان</div>
            <div className="">
              تأليف شعر تأليف شعر تأليف شعر تأليف شعر تأليف شعر تأليف شعر تأليف
              شعر تأليف شعر تأليف شعر تأليف شعر تأليف شعر تأليف شعر تأليف شعر
              تأليف شعر تأليف شعر تأليف شعر تأليف شعر تأليف شعر تأليف شعر تأليف
              شعر تأليف شعر تأليف شعر تأليف شعر تأليف شعر تأليف شعر تأليف شعر
              تأليف شعر تأليف شعر تأليف شعر تأليف شعر تأليف شعر تأليف شعر تأليف
              شعر تأليف شعر تأليف شعر تأليف شعر تأليف شعر تأليف شعر تأليف شعر
              تأليف شعر تأليف شعر تأليف شعر تأليف شعر تأليف شعر تأليف شعر تأليف
              شعر تأليف شعر تأليف شعر تأليف شعر
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
