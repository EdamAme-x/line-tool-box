import { Tooltip } from "@/src/components/Tooltip/Tooltip";
import liff from "@line/liff";
import { useState } from "react";

export function Template({ packet }: Props) {
  if (typeof window === "undefined") {
    return <div></div>;
  }


  return (
    <>
      <Tooltip>
        <div className="font-mono font-bold p-3">
          <h2 className="text-xl">Template</h2>
        </div>
      </Tooltip>
    </>
  );
}
