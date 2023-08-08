import React, { useState } from 'react'

export default function Admin(props) {

    const liff = props.liff;

    let [data, setData] = useState({
        hyjackToken: "",
        hyjackMsg: "",
        superRangeNum: "1",
        superRangeMsg: "hi! ameame"
    })

    function hijackSender() {
        const token = data.hyjackToken;
        const msg = {
            type: "text",
            text: data.hyjackMsg
        }
        const auth = "Bearer " + liff.getAccessToken();

        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': auth,
            'User-Agent': 'Mozilla/0 (Android; CPU IOS 810 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E248 Safari Line/13.11.0 LIFF',
        }

        fetch('https://api.line.me/message/v3/share', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                messages: [msg]
            }),
            compressed: true
        })
    }

    function superSender() {
        const num = parseInt(data.superRangeNum);
        const auth = "Bearer " + liff.getAccessToken();

        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': auth,
            'User-Agent': 'Mozilla/0 (Android; CPU IOS 810 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E248 Safari Line/13.11.0 LIFF',
        }

        const msg = {
            type: "text",
            text: data.superRangeMsg
        }

        const sendObj = [];

        for (let i = 0; i < num; i++) {
            sendObj.push({
                type: "text",
                text: data.superRangeMsg
            })
        }

        fetch('https://api.line.me/message/v3/share', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                messages: sendObj
            }),
            compressed: true
        })

    }


    return (
        <div>
            <details>
                <summary>開発者モード・Beta機能</summary>
                <t>開発中のツール群や使用の難しいツール</t>
                <t>動作は保証しません。</t> <br />

                <st>Hijack Sender</st>
                <t>Liffのtoken (ey...)が有れば相手のアカウントでメッセージを送信可能</t>
                <t>
                    <input
                        type="text"
                        value={data.hyjackToken}
                        placeholder='token (ey..)'
                        onChange={(e) => {
                            setData({ ...data, hyjackToken: e.target.value });
                        }}
                    />
                </t>
                <t>
                    <input
                        type="text"
                        value={data.hyjackMsg}
                        placeholder='message'
                        onChange={(e) => {
                            setData({ ...data, hyjackMsg: e.target.value });
                        }}
                    />
                </t>
                <t><button onClick={() => { hijackSender(); }}>Send</button></t>

                <br />
                <t>URLクエリ</t>
                <t>Query: {window.location.search}</t>

                <br />
                <t>超連投</t>
                <t>
                    <input
                        type="text"
                        value={data.superRangeMsg}
                        placeholder="hi! ameame"
                        onChange={(e) => {
                            setData({ ...data, superRangeMsg: e.target.value });
                        }}
                    />
                </t>
                <t>
                    <input
                        type="text"
                        value={data.superRangeNum}
                        placeholder="~10"
                        onChange={(e) => {
                            setData({ ...data, superRangeNum: e.target.value });
                        }}
                    />
                </t>
                <t>
                    <button onClick={superSender()}>Send</button>
                </t>
            </details>
        </div>
    )
}

// liff token永続化