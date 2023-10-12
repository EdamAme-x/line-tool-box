import { Tooltip } from "./Tooltip/Tooltip";
import liff from "@line/liff";
import { useState } from "react";
import * as Swal from "sweetalert2"
import { Notifys } from "./datas/notifys.jsx";

export function Info({ liffId }: Props) {
  return (
    <>
      <div
        className="flex flex-wrap justify-around w-full p-10"
        suppressHydrationWarning
      >
        <Tooltip>
          <Information liffId={liffId} />
        </Tooltip>
        <Tooltip>
          <Notification liffId={liffId} />
        </Tooltip>
      </div>
    </>
  );
}

function Information({ liffId }: Props): JSX.Element {
  const [setup, setSetup] = useState(false);
  const [scopes, setScopes] = useState<string>("");

  if (typeof window === "undefined") {
    return <></>;
  }

  liff
    .init({
      liffId: liffId,
    })
    .then(() => {
      setSetup(true);
      setScopes(liff.getContext()?.scope.join(" ").replace("chat_message.", "") as string);
    })
    .catch((_e) => console.log);

  return (
    <div className="font-mono font-bold p-3">
      Status: {setup ? "Success" : "Failed"} <br />
      Platform:{" "}
      {liff.isInClient()
        ? "LIFF / " + liff.getOS()
        : "Browser / " + liff.getOS()}
      <br />
      Version: v{(Math.floor((parseFloat(liff.getVersion()) - 1) * 100)) / 100}
      <br />
      Scopes: {scopes}
    </div>
  );
}

function Notification({ liffId }: Props): JSX.Element {
  return (
    <div className="font-mono font-bold p-1 flex flex-col items-center">
      <div className="flex">
        <NotifyIcon className="w-5 h-5 ml-3 mr-2" />
        <h2>お知らせ & ヘルプ</h2>
      </div>
      <div className="flex flex-col w-[90%] h-[120px] overflow-y-scroll overflow-x-hidden p-2 rounded-lg shadow-2xl">
        {
          Notifys.map((content, key) => <NotifyMessage key={key} title={content.title} description={content.description} />)
        }
      </div>
    </div>
  );
}

function NotifyMessage({ title, description, key }: Props) {

  const popup = () => {
    // @ts-ignore
    Swal.fire({
      html: description
    });
  }
    
  return (
    <>
      <div key={key} onClick={popup} className="border-b border-gray-900 m-1">{title}</div>
    </>
  );
}

function NotifyIcon({ className }: Props) {
  return (
    <svg
      className={className}
      fill="#000000"
      height="200px"
      width="200px"
      version="1.2"
      baseProfile="tiny"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g>
          {" "}
          <path d="M222.987,510c31.418,0,57.529-22.646,62.949-52.5H160.038C165.458,487.354,191.569,510,222.987,510z"></path>{" "}
          <path d="M432.871,352.059c-22.25-22.25-49.884-32.941-49.884-141.059c0-79.394-57.831-145.269-133.663-157.83h-4.141 c4.833-5.322,7.779-12.389,7.779-20.145c0-16.555-13.42-29.975-29.975-29.975s-29.975,13.42-29.975,29.975 c0,7.755,2.946,14.823,7.779,20.145h-4.141C120.818,65.731,62.987,131.606,62.987,211c0,108.118-27.643,118.809-49.893,141.059 C-17.055,382.208,4.312,434,47.035,434H398.93C441.568,434,463.081,382.269,432.871,352.059z"></path>{" "}
        </g>{" "}
      </g>
    </svg>
  );
}
