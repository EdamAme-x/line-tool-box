import React, { useState } from 'react'

export default function Convert(props) {

    const liff = props.liff;

    let [data, setData] = useState({
        OCLink: "",
        ReportLink: "",
    })


    function convertReport() {
        let link = data.OCLink;
        if (link.replace("ti/g2", "0000") !== link) {
            link = link.split("/");
            link = "line://square/report?ticket=" + link[link.length - 1].replace("?utm_source=invitation&utm_medium=link_copy&utm_campaign=default", "&by=amex-@macl2189");
            setData({ ...data, ReportLink: link })
        }else {
            alert("URLの形式がおかしいです。")
        }
    }

    return (
        <div>
            <t>OC通報Url 作成</t>
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
        </div>
    )
}
