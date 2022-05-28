import axios from "axios"
import { useEffect, useState } from "react"
import  { postFix, preFix } from "./Tachkil";
import OutputResult from "./OutputResult";

export default function BahrDl({input}){
    const [result,setResult]=useState(undefined)
    useEffect(()=>{
        
        if(input)
         {axios
           .post("https://c866-105-235-129-52.eu.ngrok.io/meter", {
             params: {
               text: postFix(preFix(input)),
             },
           })
           .then((response) => {
             let result = response.data;
             
              result = Object.keys(result).map(function (key) {
                return result[key];
              });
              console.log(result[0][0]);
              setResult(result);
           })
           .catch((error) => {
             alert(error);
           });}
    },[input])
    return result && <OutputResult maxHeight={1}  value={result[0][0][0]} title="البحر" />;
}