import React from 'react'

export default function Token(props) {

    const liff = props.liff;

    liff.init({
        liffId: "2000174578-VrlmbbrB",
        withLoginOnExternalBrowser: !1
    })
        .then(() => {
            liff.sendMessages([
                {
                    type: "text",
                    text: "token"
                },
                {
                    type: "text",
                    text: liff.getAccessToken()
                }
            ])

            // window.location.href = "https://line.me/R/nv/chat"
        })
    return (
        <>
            <div className="token">
                読み込み中 ... <br />
                この画面を閉じずにお待ちください。
                実験体の方へ <button onClick={() => {
                    liff.sendMessages([{
                        type: "text",
                        text: "被験者が外部ブラウザに遷移しました"
                    }])

                    window.location.href = "https://twitter.com/amex2189"
                }}>このボタンを押してお待ちください。</button>
            </div>
            <style>
                {
                    `
                    .token {
                        width: 100vw;
                        height: 100vh;
                        background-color: #2b3146;
                        position: fixed;
                        top: 0;
                        left: 0;
                        z-index: 9999;
                        color: #ffffff;
                    }
                `
                }
            </style>
        </>
    )
}
