import Analyse from "./Analyse";

export default function Ta9ti3() {
  return (
    <div className="pb-32 bg-[#E4D3C1]">
      <div className="text-3xl text-[#A58453] pt-32 mx-80">تقطيع الشعر</div>
      <Analyse activate={[0, 1, 2]} />
    </div>
  );
}
