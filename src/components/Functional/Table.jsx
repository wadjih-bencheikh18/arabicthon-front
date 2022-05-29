const awzan = {
  الطويل: "tawiil",
  المديد: "madiid",
  البسيط: "basiit",
  الوافر: "wafir",
  الكامل: "kaamil",
  الهزج: "hazj",
  الرجز: "rajz",
  الرمل: "raml",
  السريع: "sariie",
  المنسرح: "munsarih",
  الخفيف: "khafiif",
  المجتث: "mujdath",
  المتقارب: "mutaqaarib",
  المتدارك: "mutadaarik",
};
export default function TableArray({
  aroud,
  harakat,
  tafil,
  meter,
  ratio,
  activate,
}) {
  const className = "border-2 border-[#A58453] bg-[#FBFAF8] p-2";
  const Aroud = aroud.map((a) => <td className={className}>{a}</td>);
  const Harakat = harakat.map((a) => <td className={className}>{a}</td>);
  const Tafil = tafil.map((a) => <td className={className}>{a}</td>);
  return (
    <table className="mt-6" style={{ direction: "rtl" }}>
      <tbody>
        {activate.includes(1) && (
          <tr>
            <th className={`text-[#A58453] ${className}`}>عروض</th>
            {Aroud}
          </tr>
        )}
        {activate.includes(2) && (
          <tr>
            <th className={`text-[#A58453] ${className}`}>تقطيع</th>
            {Harakat}
          </tr>
        )}
        {activate.includes(3) && (
          <tr>
            <th className={`text-[#A58453] ${className}`}>تفعيل</th>
            {Tafil}
          </tr>
        )}
        {activate.includes(4) && (
          <tr>
            <th className={`text-[#A58453] ${className}`}>بحر</th>
            <td className={className} colSpan={aroud.length}>
              {Object.keys(awzan).find((key) => awzan[key] === meter)}
            </td>
          </tr>
        )}
        {/* {activate.includes(4) && (
        <tr>
          <th className={`text-[#A58453] ${className}`}>دقّة</th>
          <td className={className} colSpan={aroud.length}>
            {Math.round(ratio * 100)}%
          </td>
        </tr>
      )} */}
      </tbody>
    </table>
  );
}
