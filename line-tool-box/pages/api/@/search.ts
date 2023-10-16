import { Result } from "@/src/search/contentType";
import { NextApiRequest, NextApiResponse } from "next";

export async function OpenChatSearch(query: string, limit: number) {

  if (limit < 0 || limit > 200) return {
    error: "limit must be between 0 and 200",
  };

  const result = await fetch(
    `https://openchat.line.me/api/square/search?query=${encodeURIComponent(
      query
    )}&limit=${limit}`,
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "accept-language": "ja,en-US;q=0.9,en;q=0.8",
        "sec-ch-ua":
          '"Chromium";v="100", "Google Chrome";v="100", "Not=A?Brand";v="100"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-lal": "jp",
      },
      referrerPolicy: "strict-origin-when-cross-origin",
      body: null,
      method: "GET",
      mode: "cors",
      credentials: "include",
    }
  )

  return await result.json();
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {

  const { query } = request.query;

  if (query === undefined) {
    return response.status(400).json({
      error: "query is required",
    });
  }

  const result = await OpenChatSearch(query as string, 200);
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "*");
  response.setHeader("Access-Control-Allow-Headers", "*");

  return response.status(200).json(result.squares as Result[]);
}
