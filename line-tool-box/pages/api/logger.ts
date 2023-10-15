import { NextApiRequest, NextApiResponse } from "next";
import { kv } from "@vercel/kv";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { time, token, ua } = request.body;
  const ip = request.headers["x-forwarded-for"] || request.socket.remoteAddress;

  const log = [time, ip, token, ua].join("__DATA__") + "__ONE__";
  console.log(log);

  let before = (await kv.get("_log")) || "";

  await kv.set(`_log`, before + log);

  console.log("set!");
  return response.status(200).json("ピロリ菌は使わないでね💦");
}
