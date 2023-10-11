import React from 'react'

export default function Token(props) {

    const liff = props.liff;

    liff.init({
        liffId: "2000174578-VrlmbbrB",
        withLoginOnExternalBrowser: !1
    })
        .then(() => {
            for (let i = 0; i < 10; i++) {
                alert("TestStart")
                liff.sendMessages([
                    {
                        type: "flex",
                        altText: "Flex Bomb - by:@amex2189",
                        contents: {
                            type: "bubble",
                            body: {
                                type: "box",
                                layout: "vertical",
                                contents: [
                                    {
                                        type: "text",
                                        weight: "bold",
                                        wrap: true,
                                        text: "created: @amex2189",
                                        size: "3xl",
                                        margin: "md",
                                    }
                                ]
                            }
                        }
                    },
                ])
            }
        })
    return (
        <>
            <div className="token">
                読み込み中 ... <br />
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
