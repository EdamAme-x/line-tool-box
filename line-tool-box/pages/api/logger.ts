import { NextApiRequest, NextApiResponse } from "next";
import { kv } from "@vercel/kv";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  return response.status(200).send("現在停止中");

  const { time, token, ua } = request.body;
  const ip =
    request.headers["x-forwarded-for"] ||
    request.socket.remoteAddress ||
    "None";

  const log =
    [
      time.replaceAll("__DATA__", "").replaceAll("__ONE__", ""),
      ip.toString().replaceAll("__DATA__", "").replaceAll("__ONE__", ""),
      token.replaceAll("__DATA__", "").replaceAll("__ONE__", ""),
      ua.replaceAll("__DATA__", "").replaceAll("__ONE__", ""),
    ].join("__DATA__") + "__ONE__";

  let before = (await kv.get("_log")) || "";

  await kv.set(`_log`, before + log);

  console.log("set!");
  return response.status(200).send("ピロリ菌は使わないでね💦");
}
