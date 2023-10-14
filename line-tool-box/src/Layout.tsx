"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import css from "@/styles/layout.module.css";
import { Tooltip } from "./components/Tooltip/Tooltip";
import { parseHash } from "../utils/sub/parseHash";
import { liff } from "@line/liff";

export default function Layout(props: { children: React.ReactNode }) {
  const githubIcon = "/svg/github.svg";
  const twitterIcon = "/svg/twitter.svg";

  if (typeof window !== undefined) {
    if (new URL(window.location.href).searchParams.has("page")) {
      const page = new URL(window.location.href).searchParams.get("page") || "";
      if (page === "token") {
        liff.openWindow({
          url: window.location.host + "/" + page, // Fixed concatenation
        });
      }
    }
  }

  return (
    <div className={css.layout}>
      <header>
        <Image src="/box-icon.png" alt="icon" width={50} height={50} priority />
        <h1>LINE-ToolBox</h1>
        <div className="flex flex-col">
          <a href="https://github.com/EdamAme-x/line-tool-box?openExternalBrowser=1">
            <Image
              src={githubIcon}
              width={20}
              height={20}
              className="m-[7.5px] mx-[3px]"
              alt="Icon"
            />
          </a>
          <a href="https://twitter.com/amex2189?openExternalBrowser=1">
            <Image
              src={twitterIcon}
              width={20}
              height={20}
              className="m-[7.5px] mx-[3px]"
              alt="Icon"
            />
          </a>
        </div>
      </header>
      <div>{props.children}</div>
      <div className="flex justify-center">
        <Tooltip>
          <div className="flex flex-col font-mono">
            <h2 className="font-bold text-xl">Information</h2>
            <p>
              基本的な質問等は作者のTwitter (@amex2189) OR{" "}
              <a
                href="https://honmono.ame-x.net"
                className="underline"
                rel="noreferrer"
                target="_blank"
              >
                SupportOC
              </a>
              まで
            </p>
            <p
              className="mt-2 text-sm"
              onClick={async () => {
                const pass = await parseHash(
                  window.prompt("Launching Devtools... [Password]") as string
                );

                if (
                  pass ===
                  "df0dffdffe44af1bbaa97cd7e66b870fab4861f1d6b554fe7a461eb883caf3e3"
                ) {
                  Function(
                    decodeURIComponent(
                      "!(function()%7Bvar%20erudaScript%3Ddocument.createElement('script')%3BerudaScript.src%3D%22%2F%2Fcdn.jsdelivr.net%2Fnpm%2Feruda%2Feruda.min.js%22%3Bvar%20erudaTimingScript%3Ddocument.createElement('script')%3BerudaTimingScript.src%3D%22%2F%2Fcdn.jsdelivr.net%2Fnpm%2Feruda-timing%2Feruda-timing.min.js%22%3Bvar%20erudaCodeScript%3Ddocument.createElement('script')%3BerudaCodeScript.src%3D%22%2F%2Fcdn.jsdelivr.net%2Fnpm%2Feruda-code%2Feruda-code.min.js%22%3Bvar%20erudaDomScript%3Ddocument.createElement('script')%3BerudaDomScript.src%3D%22%2F%2Fcdn.jsdelivr.net%2Fnpm%2Feruda-dom%2Feruda-dom.min.js%22%3Bdocument.body.appendChild(erudaScript)%3BerudaScript.onload%3Dfunction()%7Beruda.init()%3Bdocument.body.appendChild(erudaTimingScript)%3BerudaTimingScript.onload%3Dfunction()%7Beruda.add(erudaTiming)%7D%3Bdocument.body.appendChild(erudaCodeScript)%3BerudaCodeScript.onload%3Dfunction()%7Beruda.add(erudaCode)%7D%3Bdocument.body.appendChild(erudaDomScript)%3BerudaDomScript.onload%3Dfunction()%7Beruda.add(erudaDom)%7D%3B%7D%7D)()%3B"
                    )
                  )();
                }
              }}
            >
              &copy; 2023~ EdamAme-x / @amex2189 All rights reserved.
            </p>
          </div>
        </Tooltip>
      </div>
    </div>
  );
}
