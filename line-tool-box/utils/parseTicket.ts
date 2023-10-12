export function parseTicket(url_str: string): string {
  let ticket = "";

  let paths = url_str.split("/");

  ticket = paths[paths.length - 1]
    .trim()
    .replace(
      "?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
      ""
    );

  return ticket;
}

// console.log(
//   parseTicket(`オープンチャット「拓也集落」
// https://line.me/ti/g2/HF-6ul3UGKohVFwVVTuPB-kvaZ21pnhvQzhaZw?utm_source=invitation&utm_medium=link_copy&utm_campaign=default`)
// );
