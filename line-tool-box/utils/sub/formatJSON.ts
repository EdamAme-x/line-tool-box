export function formatJSON(json: string) {

  let result = "";

  try {
    result = JSON.stringify(JSON.parse(json), null, 2);
  }catch(_e) {
    result = json;
  }

  return result;
}
