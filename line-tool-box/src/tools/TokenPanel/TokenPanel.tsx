import { Tooltip } from "@/src/components/Tooltip/Tooltip";
import liff from "@line/liff";
import { useState } from "react";

export function TokenPanel({
    packet
}: Props) {
  if (typeof window === "undefined") {
    return <div></div>;
  }

  const [viewToken, setViewToken] = useState(packet.token === "" ? "設定されていません" : packet.token);

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
                    setViewToken(e.target.value);
                    packet.setToken(e.target.value);
                  }}
                />
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
