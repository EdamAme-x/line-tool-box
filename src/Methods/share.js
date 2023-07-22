import React, { useState } from 'react'

export default function Share(props) {

    const liff = props.liff;

    let [data, setData] = useState({
        ShareText: "",
    })


    return (
        <div>
            <t>
                テキスト共有
            </t>

            <t>
                <t
                    type="text"
                    placeholder='url'
                    value={data.ShareText}
                    onChange={(e) => setData({ ...data, ShareText: e.target.value })}
                />
            </t>
        </div>
    )
}

