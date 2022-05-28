import axios from "axios";
import { useEffect, useState } from "react";
import InputResult from "./InputResult";
import OutputResult from "./OutputResult";
import TableArray from "./Table";
import Tachkil, { postFix, preFix } from "./Tachkil";
const choices = [
  "bahrDL",
  "tachkil",
  "kitaba 3arodiya",
  "ta9ti3",
  "taf3ilat",
  "bahr",
];
export default function Analyse({ activate }) {
  const [data, setData] = useState({});
  const [index,setIndex]=useState(0)

  return (
    <div className="h-screen mt-10  flex flex-col items-center">
      <InputResult
        setValue={(input) => {
          if (input) {
            alert("test");
            axios
              .post("http://127.0.0.1:5000/tachkil", {
                params: {
                  text: postFix(preFix(input)),
                },
              })
              .then((response) => {
                const input = response.data;
                alert(input);
                setData((data) => ({ ...data, input }));
              })
              .catch((error) => {
                alert(error);
              });
          }
        }}
        button
      />
      {data.input && (
        <Tachkil
          init={data.input}
          setValue={(tachkil) => {
              alert(tachkil);
            setData((data) => ({ ...data, tachkil }));
            axios
              .post("http://127.0.0.1:5000/ultimateAroud", {
                params: {
                  text: postFix(tachkil),
                },
              })
              .then((response) => {
                let result = response.data;
                result = Object.keys(result).map(function (key) {
                  return result[key];
                });
                console.log(result);
                setData((data) => ({ ...data, result }));
              })
              .catch((error) => {
                alert(error);
              });
          }}
        />
      )}
      {data.tachkil && <OutputResult value={data.tachkil} />}
      {/*  meter (str): kaamil
        aroud: ['كَمْلَيْلَتِنْ', 'عَانَقْتُفِي', 'هَاغَادَتَنْ']
        tafil: ['مُتْفَاعِلُنْ', 'مُتْفَاعِلُنْ', 'مُتْفَاعِلُنْ']
        tachkil: كَمْ لَيْلَةٍ عَانَقْتُ فِيهَا غَادَةً
        harakat: ['|O|O||O', '|O|O||O', '|O|O||O']
        ratio: 0.6767676767 */}
      {data.result && data.result.map(r=><TableArray {...r} />)}
    </div>
  );
}
