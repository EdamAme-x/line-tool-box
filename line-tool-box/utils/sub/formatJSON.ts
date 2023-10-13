export function formatJSON(json: string) {

  let result = "";

  try {
    result = JSON.stringify(JSON.parse(json), null, 2);
  }catch(_e) {
    alert("JSON形式に問題が有ります。")
    result = json;
  }

  return result;
}
