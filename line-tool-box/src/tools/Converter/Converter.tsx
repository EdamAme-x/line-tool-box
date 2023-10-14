import { Tooltip } from "@/src/components/Tooltip/Tooltip";
import liff from "@line/liff";
import { useState } from "react";
import { copyText } from "@/utils/sub/copyText"

export function Converter({ packet }: Props) {
  if (typeof window === "undefined") {
    return <div></div>;
  }

  const [url, setUrl] = useState("");
  const [shareUrl, setShareUrl] = useState("hello!");
  const [sharedUrl, setSharedUrl] = useState("");

  const [result, setResult] = useState([
    {
      name: "指定されていません。",
      url: "上のboxから指定可能です。",
    },
  ]);

  function convert(inputUrl: string) {
    let ticket = inputUrl
      .split("/")
      [inputUrl.split("/").length - 1];
    if (/\?/.test(ticket)) {
        ticket = ticket.split("?")[0];
    }

    if (/ticket=/.test(inputUrl)) {
        ticket = inputUrl.split("ticket=")[1];
    }

    if (ticket === undefined) return;

    const resultMap = [
      {
        name: "通報リンク",
        url: "line://square/report?ticket=" + ticket,
      },
      {
        name: "招待リンク",
        url: "line://square/ti/g2/" + ticket,
      },
      {
        name: "参加リンク",
        url: "line://square/join?ticket=" + ticket,
      },
      {
        name: "ブラウザ用リンク",
        url: `https://square-api.line.me/smw/v2/static/sm/html/#/squareCover/${ticket}?isTicket=true`,
      },
      {
        name: "Ticket",
        url: ticket,
      },
    ];

    setResult(resultMap);
  }

  return (
    <>
      <Tooltip>
        <div className="font-mono font-bold p-3">
          <h2 className="text-xl">URL変換</h2>
          <div>
            <input
              type="text"
              className="w-full rounded-lg text-2xl mt-1"
              placeholder="URL (https://line.me/ti/g2/......)"
              value={url}
              onChange={(e) => {
                const newUrl = e.target.value;
                setUrl(newUrl); // コンポーネントの状態を更新
                convert(newUrl); // URL変換を実行
              }}
            />
          </div>
          <div className="mt-5">
            {result.map((r, i) => {
              return (
                <div key={i}>
                  <p>{r.name}</p>
                  <div className="flex">
                  <input 
                  className="w-[80%] rounded-lg text-lg p-1"
                    value={r.url}
                  />
                  <button onClick={() => copyText(r.url)} className="w-[20%] bg-blue-500 hover:bg-blue-700 text-white p-1">Copy</button>
                </div>
                </div>
              );
            })}
          </div>
          <p className="mt-2 text-sm">※ ほぼ全てのURL形式に対応しています。 (https://line.me/ti/g2/...) (line://square/...) (ticketをそのまま貼ってもOKです。)</p>
          <h2 className="mt-3 text-lg">文字列共有リンク作成</h2>
          <input 
            className="w-full rounded-lg text-lg p-1"
            value={shareUrl}
            onChange={(e) => {
                setShareUrl(e.target.value)
                setSharedUrl("line://share?text=" + encodeURIComponent(shareUrl))
            }}
          />
          {
            sharedUrl !== "" ? sharedUrl : ""
          }
        </div>
      </Tooltip>
    </>
  );
}
