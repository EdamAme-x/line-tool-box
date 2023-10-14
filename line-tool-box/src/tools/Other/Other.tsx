import { Tooltip } from "@/src/components/Tooltip/Tooltip";
import liff from "@line/liff";
import { useState, useEffect } from "react";
import { findStr } from "@/utils/sub/findStr";
import { sendLiffMessage } from "@/utils/sendMessage";

export function Other({ packet }: Props) {
  if (typeof window === "undefined") {
    return <div></div>;
  }

  const [text, setText] = useState("ame-x-");
  const [num, setNum] = useState("10");
  const [resultText, setResultText] = useState("");

  const [unicodeText, setUnicodeText] = useState("");
  const [unicodeResult, setUnicodeResult] = useState("");

  function createResult() {
    setResultText(text.repeat(parseInt(num)));
  }

  useEffect(() => {
    createResult();
  }, [text, num]);
  

  return (
    <>
      <Tooltip>
        <div className="font-mono font-bold p-3">
          <h2 className="text-xl">OtherTools</h2>
          <div className="mt-2">
            <p>文字列</p>
            <div className="flex">
              <input
                value={text}
                placeholder="繰り返したいテキスト"
                className="w-[40%] text-lg mr-3"
                onChange={e => {
                  setText(e.target.value);
          }}
              />
              x
              <input
                value={num}
                placeholder="繰り返し回数"
                className="w-[40%] text-lg ml-3"
                onChange={e => {
                  setNum(e.target.value);
                }}
              />
            </div>
            <div>
                <input
                    className="w-[80%] p-1 mt-1"
                    value={resultText}
                    readOnly
                    placeholder="Result"
                />
            </div>
            <div>
                <p>文字列: {resultText.length}</p>
            </div>
          </div>
          <div>
            <h2 className="mt-2 text-xl">Unicode解析</h2>
            <p className="text-sm">高精度で解析できます。 是非スパフィルに使ってください。</p>
            <input 
              className="w-[100%] p-1 mt-1"
              value={unicodeText}
              onChange={e => {
                setUnicodeText(e.target.value)
                setUnicodeResult(findStr(e.target.value))
              }}
              placeholder="解析したいUnicodeを貼ってください。"
            />
            <input 
              className="w-[100%] p-1 mt-1"
              value={unicodeResult}
              readOnly
              placeholder="解析結果 (これをスパフィルに貼ってください。)"
            />
          </div>
          <div>
            <h2 className="mt-2 text-xl">改行砲</h2>
            <p>物凄く長いメッセージを出力します。</p>
            <button
            className="w-[20%] bg-blue-500 hover:bg-blue-700 text-white p-1"
            onClick={() => {
              sendLiffMessage(packet.token, [
                JSON.parse(`
                {
                    "type": "flex",
                    "altText": "Flex Bomb - Dev:Amex",
                    "contents": {
                      "type": "bubble",
                      "body": {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                          {
                            "type": "text",
                            "weight": "bold",
                            "wrap": true,
                            "text": "@amex2189 \\n ${"\\n".repeat(9900)}",
                            "size": "3xl",
                            "margin": "md",
                            "lineSpacing": "19999px"
                          }
                        ]
                      }
                    }
                  }
                `)
              ])
            }}>Send</button>
          </div>
        </div>
      </Tooltip>
    </>
  );
}
