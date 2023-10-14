import { Tooltip } from "@/src/components/Tooltip/Tooltip";
import liff from "@line/liff";
import { useState, useEffect } from "react";

export function Other({ packet }: Props) {
  if (typeof window === "undefined") {
    return <div></div>;
  }

  const [text, setText] = useState("ame-x-");
  const [num, setNum] = useState("10");
  const [resultText, setResultText] = useState("");

  function createResult() {
    console.log(text, num)
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
        </div>
      </Tooltip>
    </>
  );
}
