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

// ---

import { liff } from "@line/liff"; 

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
      console.log(token)
    })
  }, [])
 

  return (
    <>
      <Helmet>
        <title> Home | LINE-Tool-Box</title>
      </Helmet>
      <Layout>
        <main className={`${inter.className} flex flex-wrap`}>
          <Info liffId={liffId} />
          <div className="flex flex-wrap justify-around w-full p-10 pt-0">
            <Tools liffId={liffId} packet={{token, setToken}} />
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
    </>
  );
}
