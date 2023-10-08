import React, { useState } from 'react'

export default function Research(props) {

    const liff = props.liff;

    const [unicode, setUnicode] = useState('')
    const [result, setResult] = useState('')

    function findStr(str) {
        if (str.length < 2) {
            return "Failed!";
        }

        const charCount = {};

        for (let i = 0; i < str.length - 1; i += 2) {
            const charPair = str.slice(i, i + 2);
            if (charCount[charPair]) {
                charCount[charPair]++;
            } else {
                charCount[charPair] = 1;
            }
        }

        let mostFrequentCharPair = str.slice(0, 2);
        let maxCount = 1;

        for (const charPair in charCount) {
            if (charCount[charPair] > maxCount) {
                mostFrequentCharPair = charPair;
                maxCount = charCount[charPair];
            }
        }

        return mostFrequentCharPair;
    }

    return (
        <div>
            <t>
                Unicode解析
            </t>
            <t>
                高精度で解析できます。 スパフィル等にどうぞ
            </t>
            <textarea className="unico-reach" value={unicode} onChange={(e) => setUnicode(e.target.value)}></textarea>
            <t>
                <button onClick={() => setResult(findStr(unicode))}>解析</button>
            </t>
            <t>
                <input type="text" placeholder='結果' value={result} />
            </t>
        </div>
    )
}

