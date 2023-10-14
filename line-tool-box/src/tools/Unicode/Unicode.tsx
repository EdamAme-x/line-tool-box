import { Tooltip } from "@/src/components/Tooltip/Tooltip";
import liff from "@line/liff";
import { useState } from "react";

export function Unicode({ packet }: Props) {
  if (typeof window === "undefined") {
    return <div></div>;
  }

  const [baseText, setBaseText] = useState("unico");
  const [unicoText, setUnicoText] = useState("జ్ఞా");

  return (
    <>
      <Tooltip>
        <div className="font-mono font-bold p-3">
          <h2 className="text-xl">Unicode Sender / Creater (開発中)</h2>
          <p className="mt-1 text-xs">
            このツールは日々進化しています。 機能追加やアドバイスはサポートOC or
            作者のtwitterへ
          </p>
          <div className="mt-2 flex flex-col items-center">
            <div className="flex">
              <span className="text-xl">Base :</span>{" "}
              <input
                value={baseText}
                onChange={(e) => setBaseText(e.target.value)}
                placeholder="最初に付く文字"
              />
            </div>
            <br />
            <div>
              後に付けるUnicode:{" "}
              <input
                value={unicoText}
                onChange={(e) => setUnicoText(e.target.value)}
                placeholder="Unicode"
              />
              <br />
              <button className="w-[100%] bg-blue-500 hover:bg-blue-700 text-white p-1 text-xs mt-1">
                Unicodeの文字一覧とテンプレートを見る
              </button>
            </div>
          </div>
        </div>
      </Tooltip>
    </>
  );
}
