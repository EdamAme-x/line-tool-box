import { NextApiRequest, NextApiResponse } from "next";
import { kv } from "@vercel/kv";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const pass = request.query.pass;

  if (pass !== process.env.PASS) {
    return response.status(200).json("パスワードが間違っています");
  }

  return response.status(200).send("現在停止中");

  const log = await kv.get("_log");

  return response.status(200).json(log);
}
