import css from "@/styles/search.module.css";
import { useEffect, useState } from "react";
import type { Query, Result } from "@/src/search/contentType";
import Box from "./box";

export default function SearchContent() {
  const [query, setQuery] = useState<Query>("");
  const [results, setResults] = useState<Result[]>([]);

  useEffect(() => {
    if (query === "") return;
    fetch("/api/@/search?query=" + query).then(r => r.json()).then(data => {
      setResults(data);
    })
  }, [query])

  return (
    <>
      <form className={["w-full", (query === "" ? "fixed top-[50%]" : "fixed top-[0%]")].join(" ")}>
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
            className="block focus:outline-none w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search OpenChat"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
      {query === "" ? (
        <></>
      ) : (
        <>
          <div className="w-full h-[100vh] mt-[80px] overflow-y-scroll">
            {
              results.map((result, key) => {
                return <Box key={key} {...result} />
              })
            }
          </div>
        </>
      )}
    </>
  );
}
