/**
  * @Author @EdamAme-x 
  * @Twitter @amex2189
  * @LICENSE NoPiroriLICENSE
**/

// ピロリ菌君w 年下に嫉妬するとか可哀そうな奴やなwwwwwwwwwwwwwwwww

export class StringShorter {
  static async Shorter(string: string): Promise<string> {
    const str = encodeURIComponent(string);

    const res = await fetch('https://api.activetk.jp/urlmin/set?url=' + str);
    const data = await res.json();

    return data.Code.split("").reverse();
  }

  static async Getter(code: string): Promise<string> {
    const res = await fetch('https://api.activetk.jp/urlmin/get?code=' + code.split("").reverse());
    const data = await res.json();
    return data.LinkURL;
  }
}

// test
// StringShorter.Shorter('helooooooooooooooo!').then((r) => {
//   console.log(r);
//   StringShorter.Getter(r).then(console.log);
// });