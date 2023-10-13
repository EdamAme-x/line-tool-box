export async function sendLiffMessage(
  token: string,
  objects: any[]
): Promise<boolean> {
  fetch("https://api.line.me/message/v3/share", {
    headers: {
      accept: "application/json",
      "accept-language": "ja-JP,ja;q=0.9,en-US;q=0.8,en;q=0.7",
      authorization: `Bearer ${token}`,
      "cache-control": "no-cache",
      "content-type": "application/json",
      pragma: "no-cache",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "cross-site",
      "x-requested-with": "jp.naver.line.android",
    },
    referrerPolicy: "strict-origin-when-cross-origin",
    body: JSON.stringify({
      messages: objects,
    }),
    method: "POST",
    mode: "cors",
    credentials: "omit",
  });

  return true;
}
