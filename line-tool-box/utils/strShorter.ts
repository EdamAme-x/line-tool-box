/**
  * @Author @EdamAme-x 
  * @Twitter @amex2189
  * @LICENSE NoPiroriLICENSE
**/

export class StringShorter {
  static async Shorter(string: string): Promise<string> {
    const str = encodeURIComponent(string);

    const res = await fetch('https://api.activetk.jp/urlmin/set?url=' + str);
    const data = await res.json();

    return data.Code;
  }

  static async Getter(code: string): Promise<string> {
    const res = await fetch('https://api.activetk.jp/urlmin/get?code=' + code);
    const data = await res.json();
    return data.LinkURL;
  }
}

// test
// StringShorter.Shorter('helooooooooooooooo!').then((r) => {
//   console.log(r);
//   StringShorter.Getter(r).then(console.log);
// });