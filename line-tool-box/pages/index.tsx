import Image from "next/image";
import { Inter } from "next/font/google";
import { Helmet } from "react-helmet";
import { useState } from "react";
import Layout from "@/src/Layout";
import { getLiffId } from "@/utils/getLiffId";
import { Info } from "@/src/components/Info";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [liffId, setLiffId] = useState(getLiffId());

  return (
    <>
      <Helmet>
        <title>Home | LINE-Tool-Box</title>
      </Helmet>
      <Layout>
        <main className={`${inter.className} flex flex-wrap`}>
          <Info liffId={liffId} />
        </main>
      </Layout>
    </>
  );
}
