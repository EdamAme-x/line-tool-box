import { Tooltip } from "./Tooltip/Tooltip";
import liff from "@line/liff";
import { useState } from "react";

export function Info({ liffId }: Props) {
  return (
    <>
      <div className="flex flex-wrap justify-around w-full p-10"  suppressHydrationWarning>
        <Tooltip>
          <Information liffId={liffId} />
        </Tooltip>
        <Tooltip>info</Tooltip>
      </div>
    </>
  );
}

function Information({ liffId }: Props): JSX.Element {
  const [setup, setSetup] = useState(false);

  if (typeof window === "undefined") {
    return <></>;
  }

  liff
    .init({
      liffId: liffId,
    })
    .then(() => setSetup(true))
    .catch((_e) => {});

  return (
    <div className="font-mono font-bold">
      Status: {setup ? "Success" : "Failed"} <br />
      Platform: {liff.isInClient() ? "LIFF / " + liff.getOS() : "Browser / " + liff.getOS()}<br />
      Version: {liff.getVersion()}<br />
    </div>
  );
}
