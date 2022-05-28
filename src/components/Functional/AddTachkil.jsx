import Analyse from "./Analyse";

export default function AddTachkil() {
  return (
    <div>
      <div className="text-3xl text-[#A58453] pt-32 mx-80">تشكيل الشعر</div>
      <Analyse activate={[0]} />
    </div>
  );
}
