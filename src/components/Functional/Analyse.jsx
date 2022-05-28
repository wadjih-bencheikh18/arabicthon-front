import axios from "axios";
import { useEffect, useState } from "react";
import InputResult from "./InputResult";
import OutputResult from "./OutputResult";
import Tachkil from "./Tachkil";
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
                  text: input,
                },
              })
              .then((response) => {
                const input = response.data.predicted;
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
            setData((data) => ({ ...data, tachkil }));
            axios
              .post("http://127.0.0.1:5000/ultimateAroud", {
                params: {
                  text: tachkil,
                },
              })
              .then((response) => {
                const output = response.data;
                console.log(output);
                setData((data) => ({ ...data, ...output }));
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

      {data.aroud && <OutputResult value={data.aroud.join("-")} />}

      {data.harakat && <OutputResult value={data.harakat.join("-")} />}

      {data.tafil && <OutputResult value={data.tafil.join("-")} />}

      {data.meter && <OutputResult value={data.meter} />}
    </div>
  );
}
