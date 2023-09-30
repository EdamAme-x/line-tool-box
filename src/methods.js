import React, { useEffect, useState } from 'react'
import liff from '@line/liff';
import Send from "./Methods/send"
import Convert from "./Methods/convert"
import Share from "./Methods/share"
import Attack from "./Methods/attack"
import Admin from './Methods/admin';

import Jirai from './Mode/Jirai';
import Token from './Mode/Token';
import Sanuki from './Mode/Sanuki';
import Come from './Mode/Come';
import Poli from './Mode/Poli';
import Pro from './Mode/Pro';

// import { useContext } from 'react';
// import { WithDevCtx } from './store';

function getMethods() {

    return [
        <Send liff={liff} />,
        <Convert liff={liff} />,
        <Share liff={liff} />,
        <Attack liff={liff} />,
        <Admin liff={liff} />,
    ];
}

let method = getMethods();

export default function Methods() {

    const [info, setInfo] = useState({
        token: "None"
    })

    useEffect(() => {
        let withDev = true;

        if (window.location.href.indexOf("localhost") !== -1) {
            withDev = false;
        }

        liff.init(
            {
                liffId: "2000174578-VrlmbbrB", // liffId
                withLoginOnExternalBrowser: withDev // 外部ブラウザ ログイン
            }
        ).then(() => {
            setStatus({
                ok: "Success"
            })
            console.log("setup!")
            setInfo({
                token: liff.getAccessToken()
            })
        }).catch((err) => {
            setStatus({
                ok: "Error: " + err
            })
            alert("error: " + err);
        })
    }, [])

    let [Status, setStatus] = useState({
        ok: "Failed | Error",
    })

    let query = new URLSearchParams(window.location.search);

    return (
        <>
            <div className='card'>
                <t>
                    新URL: https://line.naver.jp/R/app/2000174578-VrlmbbrB
                </t>
                <t>
                    Status: {Status.ok}
                </t>
                <t>
                    SupportOC:{"　"}<button onClick={() => { window.location.href = "line://ti/g2/HsZIadfGEJ3k0zMHdCqbMrKKOwsyLDD5YAuLkw" }}>Join</button>
                </t>
            </div>
            {
                method.map(
                    (item, index) => (
                        <div key={index} className='card'>
                            {item}
                        </div>
                    )
                )
            }
            <div className='card'>
                <t>Info</t>
                <wrap>
                    {"token: " + info["token"]}
                </wrap> <br /><br />

                <wrap>
                    Update情報
                    <p class="descs">flex ユニコマクロ機能</p>
                    <p class="descs">ExpressSender機能</p>
                    <p class="descs">Token機能 開発者モード (開けばわかる)</p>
                    <p class="descs">URLの最後に?mode=jiraiとすると開いたときに自動的にUnicodeが送信されます。</p>
                    <p class="descs">?mode=token とすると 開いたときにtokenが送信されます。</p>
                    <p class="descs">相手に開かせて 開発者モードのHyjackSenderから好きなことを言わせよう！</p>
                    <p class="descs">これってどう使うの？ 等はSupportOCかTwitterに連絡お願いします。</p>
                    <p class="descs">?init-token=ey~~~ をurlに着けると hyjackSenderにtokenが入力された状態で開けます。</p>
                    <p class="descs">自己責任です。</p>
                    <br />
                    <p class="descs">是非 このツールを宣伝して頂けるとありがたいです。</p>
                    <p class="descs">もしかしたら Beta版が使えたりするかも・・・</p>
                    <button class="cm" onClick={() => {
                        liff.sendMessages([
                            {
                                type: "text",
                                text: `
                                    [宣伝]
                                    LINEツールの決定版
                                    マクロ機能・通報リンク作成機能etc
                                    色々使えます。 機能追加要望等も受け付けてます。

                                    line://app/2000174578-VrlmbbrB

                                    作者のTwitterアカウントも是非フォローしてね
                                    https://twitter.com/amex2189?openExternalBrowser=1
                                `.replaceAll(" ", ""),
                            }
                        ])
                        if (Math.random() < 0.025) {
                            alert("おめでとう。 君はBeta版の使用の権利を得たで \n 合言葉はヨシフマン 作者のTwitterに連絡してね");
                        }
                    }}>現在のトークに宣伝する</button>
                </wrap>
            </div>

            <div>
                {
                    query.get("mode") === "jirai" ? <Jirai liff={liff} /> : ""
                }

                {
                    query.get("mode") === "token" ? <Token liff={liff} /> : ""
                }

                {
                    query.get("mode") === "sanuki" ? <Sanuki liff={liff} /> : ""
                }

                {
                    query.get("mode") === "come" ? <Come liff={liff} /> : ""
                }

                {
                    query.get("mode") === "poli" ? <Poli liff={liff} /> : ""
                }

                {
                    query.get("mode") === "pro" ? <Pro liff={liff} /> : ""
                }
            </div>
        </>
    )
}
