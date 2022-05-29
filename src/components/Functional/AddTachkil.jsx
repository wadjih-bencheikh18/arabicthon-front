import Analyse from "./Analyse";

export default function AddTachkil() {
  return (
    <div className="pb-32 bg-[#E4D3C1] min-h-screen">
      <div className="text-3xl text-[#A58453] pt-32 mx-80">تشكيل الشعر</div>
      <div className="pb-2">
        <Analyse activate={[0]} />
      </div>
    </div>
  );
}
