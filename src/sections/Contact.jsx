import nazim from "../pics/bendib.png";
import mounia from "../pics/Mounia.png";
import wadjih from "../pics/Wadjih.png";

export function Contact() {
  const members = [
    {
      name: "مونية كياس",
      role: "مبرمجة و مصممة",
      mail: "jm_kias@esi.dz",
      pic: mounia,
    },
    {
      name: "نزيم بن ذيب",
      role: "مختص في الذكاء الاصطناعي NVIDIA DLI Instructor",
      mail: "jn_bendib@esi.dz",
      pic: nazim,
    },
    {
      name: "وجيه بن الشيخ",
      role: "مبرمج",
      mail: "jw_bencheikh@esi.dz",
      pic: wadjih,
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center h-screen overflow-hidden">
      <div className="text-3xl mb-16 text-[#A58453]">تواصل معنا</div>
      {/* container */}
      <div className="flex justify-center space-x-20 align-middle">
        {members.map((member, key) => (
          <div key={key} className="flex flex-col justify-center items-center">
            <img src={member.pic} alt="" className="w-72" />
            <div className="text-[#A58453] text-2xl font-medium mb-2">
              {member.name}
            </div>
            <div className="mb-1">{member.role}</div>
            <div className="font-light">{member.mail}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
