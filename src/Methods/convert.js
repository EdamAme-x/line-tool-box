import React, { useState } from 'react'

export default function Convert(props) {

    const liff = props.liff;

    let [data, setData] = useState({
        OCLink: "",
        ReportLink: "",
        ShareText: "",
        ShareLink: "",
    })


    function convertReport() {
        let link = data.OCLink;
        if (link.replace("ti/g2", "0000") !== link) {
            link = link.split("/");
            link = "line://square/report?ticket=" + link[link.length - 1].replace("?utm_source=invitation&utm_medium=link_copy&utm_campaign=default", "&by=amex-@macl2189");
            setData({ ...data, ReportLink: link })
        } else {
            alert("URLの形式がおかしいです。")
        }
    }

    function createShareLink() {
        let share_link= "line://share?text=" + encodeURIComponent(data.ShareText);
        setData({ ...data, ShareLink: share_link})
    }

    return (
        <div>
            <t>
                OC通報Url 作成
            </t>
            <t>
                <input
                    type="text"
                    placeholder='url'
                    value={data.OCLink}
                    onChange={(e) => setData({ ...data, OCLink: e.target.value })}
                />
            </t>

            <t>
                <button onClick={convertReport}>Convert</button>
            </t>

            <t>
                <input
                    type="text"
                    placeholder='ReportUrl'
                    value={data.ReportLink}
                    onChange={(e) => setData({ ...data, ReportLink: e.target.value })}
                />
            </t>

            <t className="text-c3">
                テキスト共有リンク作成
            </t>

            <t>
                <input
                    type="text"
                    placeholder='ShareText'
                    value={data.ShareText}
                    onChange={(e) => setData({ ...data, ShareText: e.target.value })}
                />
            </t>

            <t>
                <button onClick={createShareLink}>Create</button>
            </t>

            <t>
                <input
                    type="text"
                    placeholder='ShareLink'
                    value={data.ShareLink}
                    onChange={(e) => setData({ ...data, ShareLink: e.target.value })}
                />
            </t>

        </div>
    )
}

