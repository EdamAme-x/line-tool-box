// @ts-nocheck
export async function parseHash(str: string) {
  const buff = new Uint8Array([].map.call(str, (c) => c.charCodeAt(0))).buffer;
  const digest = await crypto.subtle.digest("SHA-256", buff);
  return [].map
    .call(new Uint8Array(digest), (x) => ("00" + x.toString(16)).slice(-2))
    .join("");
}
