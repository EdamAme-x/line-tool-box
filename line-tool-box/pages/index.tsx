import Image from "next/image";
import { Inter } from "next/font/google";
import { Helmet } from "react-helmet";
import { useState } from "react";
import Layout from "@/src/Layout";
import { getLiffId } from "@/utils/getLiffId";
import { Info } from "@/src/components/Info/Info";
import { Tooltip } from "@/src/components/Tooltip/Tooltip";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [liffId, setLiffId] = useState(getLiffId());

  return (
    <>
      <Helmet>
        <title> Home | LINE-Tool-Box</title>
      </Helmet>
      <Layout>
        <main className={`${inter.className} flex flex-wrap`}>
          <Info liffId={liffId} />
          <div className="flex flex-wrap justify-around w-full p-10">
            <Tools liffId={liffId} />
          </div>
        </main>
      </Layout>
    </>
  );
}

function Tools({ liffId }: Props) {
  return <>
    <Tooltip>
      <div className="font-mono font-bold p-3">
        <h2>メッセージ送信</h2>
      </div>
    </Tooltip>
  </>;
}
