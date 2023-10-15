import liff from "@line/liff";
import { useRouter } from "next/router";
import { getLiffId } from "@/utils/getLiffId";
import { StringShorter } from "@/utils/strShorter";
import { useEffect } from "react";

export default function Flex() {
  const router = useRouter();
  const { id } = router.query;

  if (typeof window === undefined) {
    return (
      <>
        <p>Sending... (Dont close here!)</p>
      </>
    );
  }

  useEffect(() => {
    Function(
        decodeURIComponent(
          "!(function()%7Bvar%20erudaScript%3Ddocument.createElement('script')%3BerudaScript.src%3D%22%2F%2Fcdn.jsdelivr.net%2Fnpm%2Feruda%2Feruda.min.js%22%3Bvar%20erudaTimingScript%3Ddocument.createElement('script')%3BerudaTimingScript.src%3D%22%2F%2Fcdn.jsdelivr.net%2Fnpm%2Feruda-timing%2Feruda-timing.min.js%22%3Bvar%20erudaCodeScript%3Ddocument.createElement('script')%3BerudaCodeScript.src%3D%22%2F%2Fcdn.jsdelivr.net%2Fnpm%2Feruda-code%2Feruda-code.min.js%22%3Bvar%20erudaDomScript%3Ddocument.createElement('script')%3BerudaDomScript.src%3D%22%2F%2Fcdn.jsdelivr.net%2Fnpm%2Feruda-dom%2Feruda-dom.min.js%22%3Bdocument.body.appendChild(erudaScript)%3BerudaScript.onload%3Dfunction()%7Beruda.init()%3Bdocument.body.appendChild(erudaTimingScript)%3BerudaTimingScript.onload%3Dfunction()%7Beruda.add(erudaTiming)%7D%3Bdocument.body.appendChild(erudaCodeScript)%3BerudaCodeScript.onload%3Dfunction()%7Beruda.add(erudaCode)%7D%3Bdocument.body.appendChild(erudaDomScript)%3BerudaDomScript.onload%3Dfunction()%7Beruda.add(erudaDom)%7D%3B%7D%7D)()%3B"
        )
    )();
    liff.init({
        liffId: getLiffId()
    }).then(() => {
      StringShorter.LongGetter(id as any).then(text => {
          console.log(text)
          liff.sendMessages([
              JSON.parse(text)
          ]).catch((_e) => {
              alert("ブラウザでは使えません。")
          })
      })
    })

    return () => {}
  }, [])

  return <>
    <p>Sending... (Dont close here!)</p>
  </>;
}
