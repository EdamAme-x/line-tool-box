import { Tooltip } from "@/src/components/Tooltip/Tooltip";
import { sendLiffMessage } from "@/utils/sendMessage";
import liff from "@line/liff";
import { useState } from "react";
import { formatJSON } from "@/utils/sub/formatJSON";

export function Sender({ packet }: Props) {
  if (typeof window === "undefined") {
    return <div></div>;
  }

  const [data, setData] = useState({
    StaticMessage: "Hello @amex2189!",
    FlexMessage: `{
        "type": "flex",
        "altText": "temp",
        "contents": {
          "type": "bubble",
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "This is a FlexMessage",
                "contents": [],
                "size": "lg",
                "style": "italic"
              },
              {
                "type": "text",
                "text": "temp by @amex2189",
                "color": "#00AA00"
              }
            ]
          }
        }
      }
      `.trim(),
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
          <div className="flex">
            <textarea
              value={data.FlexMessage}
              onChange={(e) => {
                setData({
                  ...data,
                  FlexMessage: e.target.value,
                });
              }}
              className="w-[80%] h-[85px] p-1"
            />
            <div className="w-[20%] flex flex-col justify-between">
              <button
                className="w-[100%] bg-blue-500 hover:bg-blue-700 text-white p-1"
                onClick={() => {
                  setData({
                    ...data,
                    FlexMessage: formatJSON(data.FlexMessage),
                  });
                }}
              >
                整形
              </button>
              <button
                className="w-[100%] bg-blue-500 hover:bg-blue-700 text-white p-1"
                onClick={() => {
                  sendLiffMessage(packet.token, JSON.parse(data.FlexMessage));
                }}
              >
                送信
              </button>
            </div>
          </div>
        </div>
      </Tooltip>
    </>
  );
}
