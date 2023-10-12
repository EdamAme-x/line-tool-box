"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import css from "@/styles/layout.module.css";

export default function Layout(props: { children: React.ReactNode }) {

  const githubIcon = "/svg/github.svg";
  const twitterIcon = "/svg/twitter.svg";

  return (
    <div className={css.layout}>
      <header>
        <Image src="/box-icon.png" alt="icon" width={50} height={50} priority />
        <h1>LINE-ToolBox</h1>
        <div className="flex flex-col">
          <a href="https://github.com/EdamAme-x/line-tool-box?openExternalBrowser=1">
            <Image src={githubIcon} width={20} height={20} className="m-[7.5px] mx-[3px]" alt="Icon" />
          </a>
          <a href="https://twitter.com/amex2189?openExternalBrowser=1">
            <Image src={twitterIcon} width={20} height={20} className="m-[7.5px] mx-[3px]" alt="Icon" />
          </a>
        </div>
      </header>
      <div>{props.children}</div>
    </div>
  );
}
