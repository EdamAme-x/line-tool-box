import React, { useState } from 'react'

export default function Unicode(props) {

    const liff = props.liff;

    const [base, setBase] = useState('hello')
    const [unicode, setUnicode] = useState('')
    const [select, setSelect] = useState('1')

    const unicodes = {
        1: 'ًۡ',
        2: 'ًۡۢ',
        3: 'ٌ٘ٚ',
        4: 'ٌ٘ٚ٘',
        5: 'ٌٖ٘ٚ٘ٙ',
        6: 'జ్ఞాజ్ఞా',
        7: 'comming soon',
        8: '',
        9: ['ًۡ', 'ًۡۢ', 'ٌ٘ٚ', 'ٌ٘ٚ٘'][Math.floor(Math.random() * 4) - 1],
    }

    function send() {
        let msg = [{
            type: "text",
            text: unicode
        }]
        liff.sendMessages(msg);
    }

    function sendMacro() {
        const token = liff.getAccessToken();
        const msg = [
            {
                type: "text",
                text: unicode
            },
            {
                type: "text",
                text: unicode
            },
            {
                type: "text",
                text: unicode
            },
            {
                type: "text",
                text: unicode
            },
            {
                type: "text",
                text: unicode
            }
        ]

        const auth = "Bearer " + token;

        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': auth,
            'User-Agent': 'Mozilla/0 (Android; CPU IOS 810 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E248 Safari Line/13.11.0 LIFF',
        }

        setInterval(() => {
            fetch('https://api.line.me/message/v3/share', {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({
                    messages: msg
                }),
                compressed: true
            })
        }, 10)
    }

    function Gen() {
        let unicodeText = base;

        if (select === '8') {
            unicodes[select] = prompt('付属するUnicodeを入力してください。');
        }

        for (let i = 0; i <= Math.floor((10000 - base.length) / unicodes[select].length) - 1; i++) {
            unicodeText += unicodes[select];
        }
        setUnicode(unicodeText);
    }

    function Copy() {
        navigator.clipboard.writeText(unicode);
        alert("コピーしました。");
    }


    return (
        <div>
            <t>
                Unicode Creater & Sender
            </t>
            <t>
                製作中 : 機能追加要望はSupportOCにお願いします。
            </t>
            <t>
                ベースの文字　<span onClick={() => alert(`Unicodeの最初に付きます。`)}>[ 説明 ]</span>
            </t>
            <t>
                <input value={base} onChange={(e) => setBase(e.target.value)} />
            </t>
            <t>
                くっ付ける文字
            </t>
            <t>
                <select value={select} onChange={(e) => setSelect(e.target.value)}>
                    <option value="1">定番二種混合</option>
                    <option value="2">三種混合</option>
                    <option value="3">四種混合</option>
                    <option value="4">五種混合</option>
                    <option value="5">定番</option>
                    <option value="6">古式ユニコード</option>
                    <option value="7" onClick={() => alert(`現在作成中`)}>Flex式</option>
                    <option value="8">カスタムUnicode</option>
                    <option value="9">ランダム</option>
                </select>
            </t>
            <t>
                <button onClick={Gen}>生成</button>
            </t>
            <t>
                <textarea value={unicode}></textarea>
            </t>
            <t>
                <button onClick={Copy}>Copy</button>
            </t>
            <t>
                <button onClick={send}>Send</button>
                <button onClick={sendMacro}>Macro Send</button>
            </t>
        </div>
    )
}

