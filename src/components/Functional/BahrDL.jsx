import axios from "axios";
import { useEffect, useState } from "react";
import { postFix, preFix } from "./Tachkil";
import OutputResult from "./OutputResult";
import BackURL from "./Backend";

export default function BahrDl({ input }) {
  const [result, setResult] = useState(undefined);
  useEffect(() => {
    if (input) {
      axios
        .post(BackURL + "/meter", {
          params: {
            text: postFix(preFix(input)),
          },
        })
        .then((response) => {
          let result = response.data;
          result = Object.keys(result).map((key) => {
            return result[key];
          });
          setResult(result);
        })
        .catch((error) => {
          alert(error);
        });
    }
  }, [input]);
  return (
    result && (
      <OutputResult
        maxHeight={1}
        value={result[0][0][0]}
        title="البحر"
        className="overflow-y-hidden"
      />
    )
  );
}
