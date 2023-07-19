import React, { useEffect } from 'react'
import liff from '@line/liff';
import Send from "./Methods/send"

function getMethods() {

    return [<Send />];
}

let method = getMethods();

export default function Methods() {

    useEffect(() => {
        // liff.init(
        //     {
        //         liffId: "1650000000", // liffId
        //         withLoginOnExternalBrowser: true // 外部ブラウザ 
        //     }
        // ).then(() => {
        //    alert("LIFF | Success");   
        // })
    }, [])

    return (
        <>
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
