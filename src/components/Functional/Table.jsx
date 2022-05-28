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
export default function TableArray({ aroud, harakat, tafil, meter, ratio }) {
  const className = "border-2 border-[#A58453] bg-white p-2";
  const Aroud = aroud.map((a) => <td className={className}>{a}</td>);
  const Harakat = harakat.map((a) => <td className={className}>{a}</td>);
  const Tafil = tafil.map((a) => <td className={className}>{a}</td>);
  return (
    <table className="mt-6" style={{ direction: "rtl" }}>
      <tr>
        <th className={`text-[#A58453] ${className}`}>عروض</th>
        {Aroud}
      </tr>
      <tr>
        <th className={`text-[#A58453] ${className}`}>حركات</th>
        {Harakat}
      </tr>
      <tr>
        <th className={`text-[#A58453] ${className}`}>تفعيل</th>
        {Tafil}
      </tr>
      <tr>
        <th className={`text-[#A58453] ${className}`}>بحر</th>
        <td className={className} colSpan={aroud.length}>
          {Object.keys(awzan).find((key) => awzan[key] === meter)}
        </td>
      </tr>
      <tr>
        <th className={`text-[#A58453] ${className}`}>دقّة</th>
        <td className={className} colSpan={aroud.length}>
          {ratio}
        </td>
      </tr>
    </table>
  );
}
