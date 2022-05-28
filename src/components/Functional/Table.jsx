

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
  const className = "border-2 border-[#A58453] rounded-sm p-2";
  const Aroud = aroud.map((a) => <td className={className}>{a}</td>);
  const Harakat = harakat.map((a) => <td className={className}>{a}</td>);
  const Tafil = tafil.map((a) => <td className={className}>{a}</td>);
  return (
    <table className="mt-5">
      <tr>
        <th className={`text-[#A58453] ${className}`}>aroud</th>
        {Aroud}
      </tr>
      <tr>
        <th className={`text-[#A58453] ${className}`}>harakat</th>
        {Harakat}
      </tr>
      <tr>
        <th className={`text-[#A58453] ${className}`}>tafil</th>
        {Tafil}
      </tr>
      <tr>
        <th className={`text-[#A58453] ${className}`}>meter</th>
        <td className={className} colSpan={aroud.length}>
          {Object.keys(awzan).find((key) => awzan[key] === meter)}
        </td>
      </tr>
      <tr>
        <th className={`text-[#A58453] ${className}`}>ratio</th>
        <td className={className} colSpan={aroud.length}>
          {ratio}
        </td>
      </tr>
    </table>
  );
}
