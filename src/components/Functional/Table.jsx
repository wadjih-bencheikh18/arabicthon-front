export default function TableArray({ aroud, harakat, tafil, meter, ratio }) {
  const className = "border border-black p-2";
  const Aroud = aroud.map((a) => <td className={className}>{a}</td>);
  const Harakat = harakat.map((a) => <td className={className} >{a}</td>);
  const Tafil = tafil.map((a) => <td className={className}>{a}</td>);
  return (
    <table className="border-collapse mt-5">
      <tr>
        <th className={className}>aroud</th>
        {Aroud}
      </tr>
      <tr>
        <th className={className}>harakat</th>
        {Harakat}
      </tr>
      <tr>
        <th className={className}>tafil</th>
        {Tafil}
      </tr>
      <tr>
        <th className={className}>meter</th>
        <td className={className} colSpan={aroud.length}>
          {meter}
        </td>
      </tr>
      <tr>
        <th className={className}>ratio</th>
        <td className={className} colSpan={aroud.length}>
          {ratio}
        </td>
      </tr>
    </table>
  );
}