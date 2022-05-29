import {  useMemo } from "react";

export default function Chiir({result}){
    const data=useMemo(()=>{
        const sdr=[]
        const ajz=[]
        result.split(/[_]|\n/).forEach((r, i) => {
          if (i % 2 === 0) {
            sdr.push(r);
          } else ajz.push(r);
        });
        return [sdr,ajz]
    },[result])
   
    return (
      <table className="w-[700px] text-xl">
        <tbody>
          {data.map(([sdr, ajz], i) => (
            <tr key={i}>
              <td className="text-center">{sdr}</td>
              <td className="text-center">{ajz}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
}