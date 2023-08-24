import React, { useState } from 'react'

export default function Share(props) {

    const liff = props.liff;

    let [data, setData] = useState({
        ShareText: "",
    })

    function exeShare() {
        window.location.href = "line://share?text=" + encodeURIComponent(data.ShareText);
    }


    return (
        <div>
            <t>
                テキスト共有
            </t>

            <t>
                <input
                    type="text"
                    placeholder='text | url'
                    value={data.ShareText}
                    onChange={(e) => setData({ ...data, ShareText: e.target.value })}
                />
            </t>

            <t>
                <button onClick={exeShare}>Share</button>
            </t>
        </div>
    )
}

