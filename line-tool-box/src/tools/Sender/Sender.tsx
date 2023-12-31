import { Tooltip } from "@/src/components/Tooltip/Tooltip";
import { sendLiffMessage } from "@/utils/sendMessage";
import liff from "@line/liff";
import { useState } from "react";
import { formatJSON } from "@/utils/sub/formatJSON";
import { StringShorter } from "@/utils/strShorter";
import { getLiffId } from "@/utils/getLiffId";
import { copyText } from "@/utils/sub/copyText";

const initFlexMessage = `{
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
`;

export function Sender({ packet }: Props) {
  if (typeof window === "undefined") {
    return <div></div>;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState({
    StaticMessage: "Hello @amex2189!",
    FlexMessage: "",
    RawMessage: `[{
        "type": "text",
        "text": "hi!"
      },
      {
        "type": "text",
        "text": "@amex2189 is here!"
      }
]`.trim(),
    ExpressMessage: "good morning! 🌞",
    FlexLink: "",
    RawLink: ""
  });

  function sendStatic() {
    sendLiffMessage(packet.token, [
      {
        type: "text",
        text: data.StaticMessage,
      },
    ]);
  }

  function sendStaticRange(num: number) {
    let sendObj = [];

    for (let i = 0; i < num; i++) {
      sendObj.push({
        type: "text",
        text: data.StaticMessage,
      });
    }

    sendLiffMessage(packet.token, sendObj);
  }

  function sendFlex() {
    try {
      sendLiffMessage(packet.token, [JSON.parse(data.FlexMessage)]);
    } catch (e) {
      alert("形式に問題が有ります。");
    }
  }

  function sendRaw() {
    try {
      sendLiffMessage(packet.token, JSON.parse(data.RawMessage));
    } catch (e) {
      alert("形式に問題が有ります。");
    }
  }

  function sendExpress() {
    setInterval(() => {
      sendLiffMessage(packet.token, [
        {
          type: "text",
          text: data.ExpressMessage,
        },
        {
          type: "text",
          text: data.ExpressMessage,
        },
        {
          type: "text",
          text: data.ExpressMessage,
        },
        {
          type: "text",
          text: data.ExpressMessage,
        },
        {
          type: "text",
          text: data.ExpressMessage,
        },
      ]);
    }, 350);
  }

  return (
    <>
      <Tooltip>
        <div className="font-mono font-bold p-3">
          <h2 className="text-xl">Sender</h2>
          <p className="mt-1">通常メッセージ送信</p>
          <div>
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
          </div>
          <div className="flex flex-wrap">
            <button
              className="w-[35%] bg-blue-500 hover:bg-blue-700 text-white p-1 mr-1"
              onClick={() => {
                const oneSendNum = prompt("一度に送信する数 (1 ~ 5)");
                if (!oneSendNum || parseInt(oneSendNum) > 5)
                  return alert("何かが違います。");
                sendStaticRange(parseInt(oneSendNum));
              }}
            >
              連投機能起動
            </button>
            <button
              className="w-[35%] bg-blue-500 hover:bg-blue-700 text-white p-1 mx-1"
              onClick={() => {
                const oneSendNum = prompt("一度に送信する数 (1 ~ 5)");
                const interval =
                  parseFloat(prompt("送信間隔 (秒)") || "1") * 1000;

                if (!oneSendNum || parseFloat(oneSendNum) > 5)
                  return alert("何かが違います。");
                if (!interval) return alert("何かが違います。");
                setInterval(() => {
                  sendStaticRange(parseInt(oneSendNum));
                }, interval)
              }}
            >
              マクロ機能起動
            </button>
          </div>
          <p className="mt-1">Flexメッセージ送信</p>
          <div className="flex">
            <textarea
              value={data.FlexMessage}
              placeholder={initFlexMessage}
              onChange={(e) => {
                setData({
                  ...data,
                  FlexMessage: e.target.value,
                });
              }}
              className="w-[80%] h-[100px] p-1"
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
                className="w-[100%] bg-blue-500 hover:bg-blue-700 text-white text-xs p-1"
                onClick={() => {
                  setData({
                    ...data,
                    FlexMessage: initFlexMessage.trim(),
                  });
                }}
              >
                テンプレート
              </button>
              <button
                className="w-[100%] bg-blue-500 hover:bg-blue-700 text-white p-1"
                onClick={sendFlex}
              >
                送信
              </button>
            </div>
          </div>
          <div className="flex">
            <button
              className="w-[50%] bg-blue-500 hover:bg-blue-700 text-white p-1 mr-1 mt-1"
              onClick={() => {
                const oneSendNum = prompt("一度に送信する数 (1 ~ 5)");
                if (!oneSendNum || parseInt(oneSendNum) > 5)
                  return alert("何かが違います。");
                for (let i = 0; i < parseInt(oneSendNum); i++) {
                  sendFlex();
                }
              }}
            >
              連投機能起動
            </button>
            <button
              className="w-[50%] bg-green-500 hover:bg-green-700 text-white p-1 ml-1 mt-1"
              onClick={() => {
                let flexText = "";
                try {
                  flexText = JSON.stringify(JSON.parse(data.FlexMessage));
                }catch(e) {
                  alert("何かが違います。");
                  return false;
                }
                if (flexText === "") return alert("何かが違います。");
                StringShorter.LongShorter(flexText).then((id) => {
                  setData({
                    ...data,
                    FlexLink: ` https://line.naver.jp/R/app/${getLiffId()}?liff.state=/flex/${id}`,
                  })

                  // StringShorter.LongGetter(id).then((text) => {
                  //   console.log(text)
                  // })
                })
              }}
            >
              短縮リンクにする
            </button>
          </div>
          <div>{data.FlexLink === "" ? <></> : <><input 
            readOnly
            value={data.FlexLink}
            className="w-[80%]"
          />
          <button
            className="w-[20%] text-md bg-yellow-400 text-white"
            onClick={() => {
              copyText(data.FlexLink)
            }}
          >
            Copy
          </button>
          </>}</div>
          <p className="mt-1">Rawメッセージ送信</p>
          <div className="flex">
            <textarea
              value={data.RawMessage}
              onChange={(e) => {
                setData({
                  ...data,
                  RawMessage: e.target.value,
                });
              }}
              className="w-[80%] h-[70px] p-1"
            />
            <div className="w-[20%] flex flex-col justify-between">
              <button
                className="w-[100%] bg-blue-500 hover:bg-blue-700 text-white p-1"
                onClick={() => {
                  setData({
                    ...data,
                    RawMessage: formatJSON(data.RawMessage),
                  });
                }}
              >
                整形
              </button>
              <button
                className="w-[100%] bg-blue-500 hover:bg-blue-700 text-white p-1"
                onClick={sendRaw}
              >
                送信
              </button>
            </div>
          </div>
          <div className="flex">
            <button
              className="w-[50%] bg-blue-500 hover:bg-blue-700 text-white p-1 mr-1 mt-1"
              onClick={() => {
                const oneSendNum = prompt("一度に送信する数 (1 ~ 5)");
                if (!oneSendNum || parseInt(oneSendNum) > 5)
                  return alert("何かが違います。");
                for (let i = 0; i < parseInt(oneSendNum); i++) {
                  sendRaw();
                }
              }}
            >
              連投機能起動
            </button>
            <button
              className="w-[50%] bg-green-500 hover:bg-green-700 text-white p-1 ml-1 mt-1"
              onClick={() => {
                let rawText = "";
                try {
                  rawText = JSON.stringify(JSON.parse(data.RawMessage));
                }catch(e) {
                  alert("何かが違います。");
                  return false;
                }
                if (rawText === "") return alert("何かが違います。");
                StringShorter.LongShorter(rawText).then((id) => {
                  setData({
                    ...data,
                    RawLink: ` https://line.naver.jp/R/app/${getLiffId()}?liff.state=/raw/${id}`,
                  })

                  // StringShorter.LongGetter(id).then((text) => {
                  //   console.log(text)
                  // })
                })
              }}
            >
              短縮リンクにする
            </button>
          </div>
          <div>{data.RawLink === "" ? <></> : <><input 
            readOnly
            value={data.RawLink}
            className="w-[80%]"
          />
          <button
            className="w-[20%] text-md bg-yellow-400 text-white"
            onClick={() => {
              copyText(data.RawLink)
            }}
          >
            Copy
          </button>
          </>}</div>
          <p className="mt-1 text-lg">ExpressSender</p>
          <div className="flex flex-col justify-center">
            <p className="mt-1 text-xs">通常の範囲で出せる最高速度のマクロ</p>
            <textarea
              className="w-[80%] p-1 h-[50px]"
              value={data.ExpressMessage}
              onChange={(e) => {
                setData({
                  ...data,
                  ExpressMessage: e.target.value,
                });
              }}
            />
            <button
              onClick={sendExpress}
              className="w-[20%] bg-blue-500 hover:bg-blue-700 text-white p-1"
            >
              送信
            </button>
          </div>
          <button
            onClick={() => {
              liff.openWindow({
                url: "https://developers.line.biz/flex-simulator/",
              });
            }}
            className="w-[100%] bg-blue-500 hover:bg-blue-700 text-white p-1 text-sm"
          >
            Flex作成ツール起動
          </button>
        </div>
      </Tooltip>
    </>
  );
}
