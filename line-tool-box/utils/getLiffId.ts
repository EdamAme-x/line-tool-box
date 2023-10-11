export function getLiffId(): string {
  const query = new URLSearchParams(window.location.search);
  const liffId = query.get("liffId") || "";
  return liffId;
}
