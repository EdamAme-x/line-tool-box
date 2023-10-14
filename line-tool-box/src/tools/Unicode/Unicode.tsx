import { Tooltip } from "@/src/components/Tooltip/Tooltip";
import liff from "@line/liff";
import { useState, useEffect } from "react";
import { sendLiffMessage } from "@/utils/sendMessage";


function shuffleArray(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

const temps = shuffleArray(["꙰⃟","ܑ", "ܰ", "ܱ", "ܲ", "ܳ", "ܴ", "ܵ", "ܶ", "ܷ", "ܸ", "ܹ", "ܺ", "ܻ", "ܼ", "ܽ", "ܾ", "ܿ", "݀", "݁", "݂", "݃", "݄", "݅", "݆", "݇", "݈", "݉", "݊", "ૺ", "ૻ", "ૼ", "ੈ", "଼", "ิ", "ุ", "ฺ", "้", "ີ", "ⷣ", "ⷵ", "ⷨ", "֦", "֘"]);

export function Unicode({ packet }: Props) {
  if (typeof window === "undefined") {
    return <div></div>;
  }

  const [baseText, setBaseText] = useState("unico");
  const [unicoText, setUnicoText] = useState("జ్ఞా");
  const [canView, setCanView] = useState(false);
  const [canTemp, setCanTemp] = useState(false);
  const [resultText, setResultText] = useState("");
  const [lengths, setLengths] = useState(0);

  useEffect(() => {
    const y = (10000 - baseText.length) % unicoText.length;
    const x = (10000 - y) / unicoText.length;

    const result = (baseText + unicoText.repeat(x + 1)).substring(0, 10000);
    setResultText(result);
    setLengths(result.length);
  }, [baseText, unicoText]);

  function onSend() {
    sendLiffMessage(packet.token, [
      {
        type: "text",
        text: resultText,
      },
    ]);
  }

  function allSend() {
    sendLiffMessage(packet.token, [
      {
        type: "text",
        text: resultText,
      },
      {
        type: "text",
        text: resultText,
      },
      {
        type: "text",
        text: resultText,
      },
      {
        type: "text",
        text: resultText,
      },
      {
        type: "text",
        text: resultText,
      },
    ]);
  }

  const addUnicode = (text: string) => {
    setUnicoText(unicoText + text);
  }

  return (
    <>
      <Tooltip>
        <div className="font-mono font-bold p-3">
          <h2 className="text-xl">Unicode Sender / Creater</h2>
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
              <button className="w-[100%] bg-blue-500 hover:bg-blue-700 text-white p-1 text-xs mt-1"
                onClick={() => setCanTemp(!canTemp)}
              >
                Unicodeの文字一覧とテンプレートを見る
              </button>
              {
                canTemp ? <Templates add={addUnicode} /> : <></>
              }
            </div>
            <div className="mt-1">
              <div>
                <input
                  className="mt-2 text-xs"
                  type="checkbox"
                  checked={canView}
                  id="c"
                  onClick={() => setCanView(!canView)}
                />{" "}
                <label htmlFor="c">
                  結果を表示する (処理が重くなる場合が有ります。)
                </label>
              </div>
              <button
                className="w-[33.3%] bg-blue-500 hover:bg-blue-700 text-white p-1"
                onClick={onSend}
              >
                送信
              </button>
              <button
                className="w-[33.3%] bg-green-500 hover:bg-green-700 text-white p-1"
                onClick={() => {
                  const interval =
                    parseFloat(prompt("送信間隔 (秒)") || "1") * 1000;
                  setInterval(() => {
                    allSend();
                  }, interval);
                }}
              >
                マクロ送信
              </button>
              <button
                className="w-[33.3%] bg-yellow-500 hover:bg-yellow-700 text-white p-1"
                onClick={() => {
                  window.location.href = "line://share?text=" + resultText;
                }}
              >
                共有
              </button>
            </div>
            <div>
              {canView ? (
                <input value={resultText} readOnly placeholder="Result" />
              ) : (
                <></>
              )}
              <br />
              文字数: {lengths} ✅ 正常です
            </div>
          </div>
        </div>
      </Tooltip>
    </>
  );
}

function Templates({ add }: Props) {
  return <div className="flex flex-wrap">
    {
        temps.map((c, i) => {
            return <div key={i}>
                <button onClick={() => add(c)} className="border-t border-r border-b border-l mx-1 mt-1 border-black p-1 px-2 min-w-[20px] rounded bg-white">{c}</button>
            </div>
        })
    }
  </div>;
}
