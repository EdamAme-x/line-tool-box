import { Tooltip } from "@/src/components/Tooltip/Tooltip";
import { sendLiffMessage } from "@/utils/sendMessage";
import liff from "@line/liff";
import { useState } from "react";

export function Sender({ packet }: Props) {
  if (typeof window === "undefined") {
    return <div></div>;
  }

  const [data, setData] = useState({
    StaticMessage: "Hello @amex2189!",
  });

  function sendStatic() {
    sendLiffMessage(packet.token, [
      {
        type: "text",
        text: data.StaticMessage,
      },
    ]);
  }

  return (
    <>
      <Tooltip>
        <div className="font-mono font-bold p-3">
          <h2 className="text-xl">Sender</h2>
          <p className="mt-1">通常メッセージ送信</p>
          <input
            placeholder="送信するメッセージ"
            value={data.StaticMessage}
            onChange={(e) => {
              setData({
                ...data,
                StaticMessage: e.target.value,
              });
            }}
            className="w-[80%] p-1"
          />
          <button
            className="w-[20%] bg-blue-500 hover:bg-blue-700 text-white p-1"
            onClick={sendStatic}
          >
            送信
          </button>
          <p className="mt-1">Flexメッセージ送信</p>
        </div>
      </Tooltip>
    </>
  );
}
