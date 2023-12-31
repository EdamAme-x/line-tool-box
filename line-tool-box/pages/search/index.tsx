import { useState } from "react";
import SearchContent from "./../../src/search/content";
import { Helmet } from "react-helmet";

export default function Search() {
  const [view, setView] = useState(true);

  return (
    <>
      <Helmet>
        <title>OpenChat PowerSearch</title>
        <meta name="preconnect" content="https://obs.line-scdn.net" />
        <meta name="prefetch" content="https://obs.line-scdn.net" />
      </Helmet>
      <div
        className="font-mono font-bold w-[100vw] h-[100vh] bg-gray-800 flex justify-center items-center"
        style={{
          backgroundImage: "url('/graphic.png')",
        }}
      >
        <div onClick={() => setView(false)} className="min-w-[350px] min-h-[100vh] max-w-[350px] max-h-[100vh] flex flex-col justify-around items-center">
          <SearchContent />
        </div>
        {view ? (
          <div className="fixed bottom-0 text-white">
            Created by @amex2189 &lt;= 是非フォローしてね
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
