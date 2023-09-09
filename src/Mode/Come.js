import React, { useEffect } from 'react'

export default function Jirai(props) {

    const liff = props.liff;

    let msg = [{
        "type": "flex", "altText": "オープンチャット招待", "contents": {
            "type": "carousel", "contents": [{
                "type": "bubble",
                "body": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                        {
                            "type": "image", "url": "https://bnewg.up.seesaa.net/image/b781ac682028129.jpg",
                            "size": "full",
                            "aspectMode": "cover",
                            "aspectRatio": "1:1",
                            "gravity": "center"
                        },
                        {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [],
                            "position": "absolute",
                            "background": {
                                "type": "linearGradient",
                                "angle": "0deg",
                                "endColor": "#00000000",
                                "startColor": "#00000099"
                            },
                            "width": "100%",
                            "height": "50%",
                            "offsetBottom": "0px",
                            "offsetStart": "0px",
                            "offsetEnd": "0px"
                        },
                        {
                            "type": "box",
                            "layout": "horizontal",
                            "contents": [
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [
                                                {
                                                    "type": "text",
                                                    "text": "ゲーム好き🤭",
                                                    "size": "xl",
                                                    "color": "#ffffff"
                                                }
                                            ]
                                        }
                                    ],
                                    "spacing": "xs"
                                }
                            ],
                            "position": "absolute",
                            "offsetBottom": "0px",
                            "offsetStart": "0px",
                            "offsetEnd": "0px",
                            "paddingAll": "20px"
                        }
                    ],
                    "paddingAll": "0px"
                }
            }, {
                "type": "bubble",
                "body": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                        {
                            "type": "image", "url": "https://p.potaufeu.asahi.com/ef39-p/picture/26839911/a41f92c90ba541a370211ec00176364e.png",
                            "size": "full",
                            "aspectMode": "cover",
                            "aspectRatio": "1:1",
                            "gravity": "center"
                        },
                        {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [],
                            "position": "absolute",
                            "background": {
                                "type": "linearGradient",
                                "angle": "0deg",
                                "endColor": "#00000000",
                                "startColor": "#00000099"
                            },
                            "width": "100%",
                            "height": "0%",
                            "offsetBottom": "0px",
                            "offsetStart": "0px",
                            "offsetEnd": "0px"
                        },
                        {
                            "type": "box",
                            "layout": "horizontal",
                            "contents": [
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [
                                                {
                                                    "type": "text",
                                                    "text": "鉄オタ🤓",
                                                    "size": "3xl",
                                                    "color": "#ffd900"
                                                }
                                            ]
                                        }
                                    ],
                                    "spacing": "xs"
                                }
                            ],
                            "position": "absolute",
                            "offsetBottom": "0px",
                            "offsetStart": "0px",
                            "offsetEnd": "0px",
                            "paddingAll": "20px"
                        }
                    ],
                    "paddingAll": "0px"
                }
            }, {
                "type": "bubble",
                "body": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                        {
                            "type": "image", "url": "https://www.asunaro-kk.com/wp/wp-content/uploads/2019/01/hikikomori_toukoukyohi.png",
                            "size": "full",
                            "aspectMode": "cover",
                            "aspectRatio": "1:1",
                            "gravity": "center"
                        },
                        {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [],
                            "position": "absolute",
                            "background": {
                                "type": "linearGradient",
                                "angle": "0deg",
                                "endColor": "#00000000",
                                "startColor": "#00000099"
                            },
                            "width": "100%",
                            "height": "50%",
                            "offsetBottom": "0px",
                            "offsetStart": "0px",
                            "offsetEnd": "0px"
                        },
                        {
                            "type": "box",
                            "layout": "horizontal",
                            "contents": [
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [
                                                {
                                                    "type": "text",
                                                    "text": "不登校😢",
                                                    "size": "xl",
                                                    "color": "#ffffff"
                                                }
                                            ]
                                        }
                                    ],
                                    "spacing": "xs"
                                }
                            ],
                            "position": "absolute",
                            "offsetBottom": "0px",
                            "offsetStart": "0px",
                            "offsetEnd": "0px",
                            "paddingAll": "20px"
                        }
                    ],
                    "paddingAll": "0px"
                }
            }, {
                "type": "bubble",
                "body": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                        {
                            "type": "image",
                            "url": "https://chie-pctr.c.yimg.jp/dk/iwiz-chie/que-10263922900?w=200&h=200&up=0",
                            "size": "full",
                            "aspectMode": "cover",
                            "aspectRatio": "1:1",
                            "gravity": "center"
                        },
                        {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [],
                            "position": "absolute",
                            "background": {
                                "type": "linearGradient",
                                "angle": "0deg",
                                "endColor": "#00000000",
                                "startColor": "#00000099"
                            },
                            "width": "100%",
                            "height": "0%",
                            "offsetBottom": "0px",
                            "offsetStart": "0px",
                            "offsetEnd": "0px"
                        },
                        {
                            "type": "box",
                            "layout": "horizontal",
                            "contents": [
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [
                                                {
                                                    "type": "text",
                                                    "text": "片目界隈😎",
                                                    "size": "3xl",
                                                    "color": "#ffffff"
                                                }
                                            ]
                                        }
                                    ],
                                    "spacing": "xs"
                                }
                            ],
                            "position": "absolute",
                            "offsetBottom": "0px",
                            "offsetStart": "0px",
                            "offsetEnd": "0px",
                            "paddingAll": "20px"
                        }
                    ],
                    "paddingAll": "0px"
                }
            }, {
                "type": "bubble",
                "body": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                        {
                            "type": "image", "url": "https://s4.aconvert.com/convert/p3r68-cdx67/aew67-6unu2.jpg",
                            "size": "full",
                            "aspectMode": "cover",
                            "aspectRatio": "1:1",
                            "gravity": "center"
                        },
                        {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [],
                            "position": "absolute",
                            "background": {
                                "type": "linearGradient",
                                "angle": "0deg",
                                "endColor": "#00000000",
                                "startColor": "#00000099"
                            },
                            "width": "100%",
                            "height": "0%",
                            "offsetBottom": "0px",
                            "offsetStart": "0px",
                            "offsetEnd": "0px"
                        },
                        {
                            "type": "box",
                            "layout": "horizontal",
                            "contents": [
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [
                                                {
                                                    "type": "text",
                                                    "text": ".",
                                                    "size": "xl",
                                                    "color": "#ffffff"
                                                }
                                            ]
                                        }
                                    ],
                                    "spacing": "xs"
                                }
                            ],
                            "position": "absolute",
                            "offsetBottom": "0px",
                            "offsetStart": "0px",
                            "offsetEnd": "0px",
                            "paddingAll": "20px"
                        },
                        {
                            "type": "image",
                            "url": "https://file-uploader.cf/get?q=a105cfb264eb03f4",
                            "size": "full",
                            "aspectMode": "cover",
                            "aspectRatio": "1:1",
                            "gravity": "center"
                        },
                        {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [],
                            "position": "absolute",
                            "background": {
                                "type": "linearGradient",
                                "angle": "0deg",
                                "endColor": "#00000000",
                                "startColor": "#00000099"
                            },
                            "width": "100%",
                            "height": "0%",
                            "offsetBottom": "0px",
                            "offsetStart": "0px",
                            "offsetEnd": "0px"
                        },
                        {
                            "type": "box",
                            "layout": "horizontal",
                            "contents": [
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [
                                                {
                                                    "type": "text",
                                                    "text": "ピロリ菌🤓",
                                                    "size": "3xl",
                                                    "color": "#ffffff"
                                                }
                                            ]
                                        }
                                    ],
                                    "spacing": "xs"
                                }
                            ],
                            "position": "absolute",
                            "offsetBottom": "0px",
                            "offsetStart": "0px",
                            "offsetEnd": "0px",
                            "paddingAll": "20px"
                        }
                    ],
                    "paddingAll": "0px"
                }
            }, {
                "type": "bubble",
                "hero": {
                    "type": "image",
                    "url": "https://s4.aconvert.com/convert/p3r68-cdx67/a2t45-7jq0b.jpg",
                    "size": "full",
                    "aspectRatio": "20:6",
                    "aspectMode": "cover",
                    "action": {
                        "type": "uri",
                        "uri": "https://line.me/ti/g2/HsZIadfGEJ3k0zMHdCqbMrKKOwsyLDD5YAuLkw"
                    }
                },
                "body": {
                    "type": "box",
                    "layout": "vertical",
                    "spacing": "md",
                    "action": {
                        "type": "uri",
                        "uri": "https://line.me/ti/g2/HsZIadfGEJ3k0zMHdCqbMrKKOwsyLDD5YAuLkw"
                    },
                    "contents": [
                        {
                            "type": "text",
                            "text": "「拓也集落」",
                            "size": "xl",
                            "weight": "bold"
                        },
                        {
                            "type": "text",
                            "text": "色んな界隈から寄せ集められたホンモノと雑談してみませんか？",
                            "wrap": true,
                            "color": "#aaaaaa",
                            "size": "sm"
                        }
                    ]
                },
                "footer": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                        {
                            "type": "button",
                            "style": "primary",
                            "color": "#00A2A4",
                            "margin": "xxl",
                            "action": {
                                "type": "uri",
                                "label": "少し覗いてみる",
                                "uri": "https://line.me/ti/g2/HsZIadfGEJ3k0zMHdCqbMrKKOwsyLDD5YAuLkw"
                            }
                        }
                    ]
                }
            }]
        }
    }]

    useEffect(() => {
        liff.sendMessages(msg).then(() => {
        }).catch((err) => {
            alert(err)
        })
    }, [])

    return (
        <>
            <div className="jirai">
                拓也😎
            </div>
            <style>
                {
                    `
                    .jirai {
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
