export async function sendLiffMessage(token: string, objects: any[]): Promise<boolean> {

  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': "Bearer " + token,
    'User-Agent': 'Mozilla/0 (Android; CPU IOS 810 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E248 Safari Line/13.11.0 LIFF',
    'Referer': 'https://line-tool.ame-x.net/'
  };
  
  await fetch('https://api.line.me/message/v3/share', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
          messages: objects
      })
  });

  return true;
}