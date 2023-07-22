import React, { useEffect, useState } from 'react'
import liff from '@line/liff';
import Send from "./Methods/send"
import Convert from "./Methods/convert"
import Share from "./Methods/share"

function getMethods() {

    return [
        <Send liff={liff} />,
        <Convert liff={liff} />,
        <Share liff={liff} />
    ];
}

let method = getMethods();

export default function Methods() {

    useEffect(() => {
        let withDev = true;
        if ("lcoalhost".indexOf(window.location.href)) {
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
        }).catch((err) => {
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
        </>
    )
}
