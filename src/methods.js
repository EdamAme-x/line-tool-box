import React, { useEffect, useState } from 'react'
import liff from '@line/liff';
import Send from "./Methods/send"
import Convert from "./Methods/convert"
import Share from "./Methods/share"
import Attack from "./Methods/attack"

// import { useContext } from 'react';
// import { WithDevCtx } from './store';

function getMethods() {

    return [
        <Send liff={liff} />,
        <Convert liff={liff} />,
        <Share liff={liff} />,
        <Attack liff={liff} />
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

    return (
        <>
            <div className='card'>
                <t>
                    Status: {Status.ok}
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

                {"token: " + info["token"]}

            </div>
        </>
    )
}
