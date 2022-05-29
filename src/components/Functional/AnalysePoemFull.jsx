import { useState } from "react";
import Analyse from "./Analyse";
const choices = [
  "تشكيل",
  "الكتابة العروضية",
  "التقطيع",
  "التفعيلات",
  "البحر بالتشكيل",
  "البحر دون تشكيل",
];
export default function AnalysePoemFull() {
  const [activate, setActivate] = useState([0]);
  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="flex gap-5">
        {choices.map((c, i) => (
          <div
            className={`rounded-lg px-3  cursor-pointer py-1 ${
              activate.includes(i)
                ? "bg-[rgba(165,132,83,1)] "
                : "bg-[rgba(165,132,83,0.3)] hover:bg-[rgba(165,132,83,0.6)] hover:animate-ping-once-fast"
            }`}
            key={i}
            onClick={() => {
              setActivate((activate) => {
                if (activate.includes(i)) {
                  const res = activate.filter((a) => a !== i);
                  return res;
                } else {
                  const res = [...activate, i];
                  return res;
                }
              });
            }}
          >
            {c}
          </div>
        ))}
      </div>
      <Analyse activate={activate} />
    </div>
  );
}
