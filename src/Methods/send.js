import React, { useState } from 'react'

export default function Send(props) {

  let liff = props.liff;

  let [data, setData] = useState({
    StaticText: "",
    RawText: ""
  })

  function sendText() {
    liff.sendMessages([{
      type: "text",
      text: data.StaticText
    }])
  }

  return (
    <div>
      <t>通常メッセージ送信</t>
      <input type="text" placeholder='text' value={data.StaticText} onInput={(e) => setData({ ...data, StaticText: e.target.value })} />
      <button onClick={sendText}>Send</button>
    </div>
  )
}

