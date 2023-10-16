import css from "@/styles/search.module.css";
import { useEffect, useState } from "react";
import type { Query, Result } from "@/src/search/contentType";
import Box, { max } from "./box";
import { copyText } from "@/utils/sub/copyText"

export default function SearchContent() {
  const [query, setQuery] = useState<Query>("");
  const [results, setResults] = useState<Result[]>([]);

  const [showDetail, setShowDetail] = useState(false);
  const [propsNow, setPropsNow] = useState<Result & any>({});
  const [propsCopy, setPropsCopy] = useState<Result & any>({});

  const [showInfo, setShowInfo] = useState(false);

  function showDetails(
    props: Result & {
      showDetails: Function;
    }
  ) {
    setPropsNow(props);
    setShowDetail(!showDetail);
  }

  useEffect(() => {
    if (query === "") return;
    fetch("/api/@/search?query=" + query)
      .then((r) => r.json())
      .then((data) => {
        setResults(data);
      });
  }, [query]);

  return (
    <>
      <form
        className={[
          "w-full  max-w-[350px]",
          query === "" ? "fixed top-[50%]" : "fixed top-[0%]",
        ].join(" ")}
      >
        <label
          htmlFor="search-box"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="search-box"
            className="block focus:outline-none w-full p-4 pl-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search OpenChat"
            value={query}
            style={{
                fontSize: "16px"
            }}
            onChange={(e) => setQuery(e.target.value)}
            required
          />
        </div>
      </form>
      {query === "" ? (
        <></>
      ) : (
        <>
          <div className="w-full h-[100vh] mt-[80px] overflow-y-scroll">
            {results.map((result, key) => {
              return <Box key={key} {...result} showDetails={showDetails} />;
            })}
          </div>
        </>
      )}
      {showDetail ? (
        <div className="fixed text-white top-0 w-[90%] max-w-[315px] h-[90vh] mt-[30px] bg-gray-600 rounded-lg shadow-sm shadow-gray-500 flex flex-col items-center justify-around">
          <button
            className="ml-auto mr-[20px] mt-[5px] transform scale-150"
            onClick={() => {
                setShowDetail(false)
                setShowInfo(false)
            }}
          >
            X
          </button>
          <img
            src={`https://obs.line-scdn.net/${propsNow.square.profileImageObsHash}/preview.100x100`}
            alt={propsNow.square.name}
            className="rounded-full mt-3 w-[70%] max-w-[280px] shadow-lg shadow-gray-500"
          />
          <div className="flex flex-col mt-5">
            <p className="font-bold text-xl text-center">
              {propsNow.square.name.length > max + 2
                ? propsNow.square.name.slice(0, max + 2) + ".."
                : propsNow.square.name}
            </p>
            <p className="text-xs mx-3 mt-2 max-h-[100px] overflow-y-scroll rounded-lg word-wrap">
              {propsNow.square.desc}
            </p>
          </div>
          <div className="w-full flex flex-col items-center">
            <button
              onClick={() => {
                const copyProps = Object.create(propsNow);

                copyProps.square.desc = "省略"

                setPropsCopy(propsNow);
                setShowInfo(!showInfo);
              }}
              className="text-white w-[90%] bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2 mr-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
            >
              See Info
            </button>
            {showInfo ? (
              <div className="fixed top-[10%] w-[80%] max-w-[300px] h-[75vh] bg-gray-500 rounded-lg flex flex-col items-center">
                <p onClick={() => setShowInfo(false)} className="mt-2 transform scale-150">X</p>
                <textarea readOnly className="my-2 bg-gray-900 h-[50%] w-[80%]" value={JSON.stringify(propsCopy, null, 2)}></textarea>
                <p>通報リンク</p>
                <input readOnly className="mt- text-sm bg-black w-[80%]" value={"line://square/report?emid=" + propsNow.square.emid}/>
                <button className="bg-green-600 mt-1 px-2 rounded mb-1" onClick={() => copyText("line://square/report?emid=" + propsNow.square.emid)}>Copy</button>
                <p>参加リンク</p>
                <input readOnly className="mt-1 text-sm bg-black w-[80%]" value={"line://square/join?emid=" + propsNow.square.emid}/>
                <p>ブラウザ用リンク</p>
                <input readOnly className="mt-1 text-sm bg-black w-[80%]" value={"https://square-api.line.me/smw/v2/static/sm/html/#/squareCover/" + propsNow.square.emid}/>
                
              </div>
            ) : (
              <></>
            )}
          </div>
          <button
            type="button"
            onClick={() => {
              window.open(
                `line://square/join?emid=` + propsNow.square.emid,
                "_blank"
              );
            }}
            className="text-white w-[90%] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Join
          </button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
