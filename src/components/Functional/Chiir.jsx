import {  useMemo } from "react";

export default function Chiir({result}){
    const [sdr, ajz] = useMemo(() => {
      const sdr = [];
      const ajz = [];
      console.log(result);
      result.split(/[_]|\n/).forEach((r, i) => {
        if (i % 2 === 0) {
          sdr.push(r);
        } else ajz.push(r);
      });
      return [sdr, ajz];
    }, [result]);
   
    return (
      <table className="w-[700px] text-xl">
        <tbody>
          {sdr.map((sdr, i) => (
            <tr key={i}>
              <td className="text-center">{ajz[i]}</td>
              <td className="text-center">{sdr}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
}