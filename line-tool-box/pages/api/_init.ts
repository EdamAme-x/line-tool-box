import { NextApiRequest, NextApiResponse } from "next";
import { kv } from "@vercel/kv";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  await kv.set("_log", "");
  return response.status(200).json("ピロリ菌は使わないでね💦");
}
