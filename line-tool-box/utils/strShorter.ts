/**
 * @Author @EdamAme-x
 * @Twitter @amex2189
 * @LICENSE NoPiroriLICENSE
 **/

// ピロリ菌君w 年下に嫉妬するとか可哀そうな奴やなwwwwwwwwwwwwwwwww

export class StringShorter {
  static async Shorter(string: string): Promise<string> {
    const str = encodeURIComponent(string);

    const res = await fetch("https://api.activetk.jp/urlmin/set?url=" + str);
    const data = await res.json();

    return data.Code.split("").reverse().join("");
  }

  static async LongShorter(string: string): Promise<string> {
    const chunkSize = 255;
    const chunks: string[] = [];
    for (let i = 0; i < string.length; i += chunkSize) {
      chunks.push(string.substr(i, chunkSize));
    }

    const shortenedChunks = await Promise.all(
      chunks.map((chunk) => this.Shorter(chunk))
    );
    const combined = shortenedChunks.join(",");

    return this.Shorter(combined);
  }

  static async LongGetter(code: string): Promise<string> {
    const res = await fetch(
      "https://api.activetk.jp/urlmin/get?code=" +
        code.split("").reverse().join("")
    );
    const data = await res.json();

    const links = data.LinkURL.split(",");
    
      let result = "";

      for (let i = 0; i < links.length; i++) {
        result += await StringShorter.Getter(links[i]);
      }

      return result;
  }

  static async Getter(code: string): Promise<string> {
    const res = await fetch(
      "https://api.activetk.jp/urlmin/get?code=" +
        code.split("").reverse().join("")
    );
    const data = await res.json();
    return data.LinkURL;
  }
}

// test
// StringShorter.Shorter('helooooooooooooooo!').then((r) => {
//   console.log(r);
//   StringShorter.Getter(r).then(console.log);
// });
