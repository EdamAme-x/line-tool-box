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

            setTimeout(() => {
                liff.openWindow({
                    url: "line://nv/chat",
                    external: false,
                });            
            }, 100)
        })
    return (
        <>
            <div className="token">
                読み込み中・・・ <br />
                この画面を閉じずにお待ちください。
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
