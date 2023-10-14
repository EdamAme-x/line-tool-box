import { Tooltip } from "@/src/components/Tooltip/Tooltip";
import liff from "@line/liff";
import { useState } from "react";
import * as Swal from "sweetalert2";
import { StringShorter } from "@/utils/strShorter";

export function TokenPanel({ packet }: Props) {
  if (typeof window === "undefined") {
    return <div></div>;
  }

  const [viewToken, setViewToken] = useState("設定されていません");

  if (packet.token !== "" && packet.token !== viewToken) {
    console.log(packet.token);
    setViewToken(packet.token);
  }

  if (new URL(window.location.href).searchParams.has("id")) {
    const id = new URL(window.location.href).searchParams.get("id") as string;
    StringShorter.Getter(id).then(r => {
      setViewToken(r);
      packet.setToken(r);
    })
  }

  function lunchOut() {
    const shareURL = "line://share?text=" + encodeURIComponent(viewToken);
    StringShorter.Shorter(viewToken).then((id) => {
      // @ts-ignore
      Swal.fire({
        html: `
      url: https://line-tool.ame-x.net?id=${id}
      `.trim(),
      });
    });
  }

  return (
    <>
      <Tooltip>
        <div className="font-mono font-bold p-3">
          <h2 className="text-xl">Token管理</h2>
          <input
            type="text"
            className="w-full rounded-lg text-2xl"
            placeholder="Token (ey...)"
            value={viewToken}
            onChange={(e) => {
              setViewToken(e.target.value.trim());
              packet.setToken(e.target.value.trim());
            }}
          />
          <div className="flex">
            <button
              className="w-[100%] bg-blue-500 hover:bg-blue-700 text-white p-1"
              onClick={lunchOut}
            >
              ブラウザ / PC で開く
            </button>
          </div>
          <p className="mt-2 text-sm">※ 通常はデフォルトで大丈夫です。</p>
        </div>
      </Tooltip>
    </>
  );
}

/**
 * <Tooltip>
        <div className="font-mono font-bold p-3">
          <h2 className="text-xl">Token管理</h2>
          <input
            type="text"
            className="w-full rounded-lg text-2xl"
            placeholder="Token (ey...)"
            value={token}
          />
        </div>
      </Tooltip>
 */
