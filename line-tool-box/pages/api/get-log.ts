import { NextApiRequest, NextApiResponse } from "next";
import { kv } from "@vercel/kv";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const log = await kv.get("_log");

  return response.status(200).json(log);
}
