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
