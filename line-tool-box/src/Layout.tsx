"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import css from "@/styles/layout.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div className={css.layout}>
      <header>
        <Image src="/box-icon.png" alt="icon" width={50} height={50} priority />
        <h1>LINE-Tool-Box</h1>
      </header>
      <div>{props.children}</div>
    </div>
  );
}
