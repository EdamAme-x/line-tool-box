import Image from "next/image";
import { Tooltip } from "./Tooltip/Tooltip";

export function Info({ liffId }: Props) {
  return (
    <>
      <div className="flex flex-wrap justify-around w-full p-10">
        <Tooltip>info</Tooltip>
        <Tooltip>info</Tooltip>
      </div>
    </>
  );
}
