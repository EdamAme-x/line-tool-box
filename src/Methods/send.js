import React, { useState } from "react";

export default function Send(props) {
  let liff = props.liff;

  let [data, setData] = useState({
    StaticText: "",
    RawText: "",
    RangeText: "",
    RangeNum: "3",
    MacroText: "hi!",
    MacroNum: "3",
    MacroInterval: "1000",
  });

  function sendText() {
    liff.sendMessages([
      {
        type: "text",
        text: data.StaticText,
      },
    ]);
  }

  function sendTextRange() {

    if (!(parseInt(data.RangeNum) >= 1 && parseInt(data.RangeNum) <= 5)) {
      return alert("1~5で入力してください。");
    }

    let msg = [];

    for (let i = 0; i < parseInt(data.RangeNum); i++) {
      msg.push({
        type: "text",
        text: data.RangeText,
      })
    }
    liff.sendMessages(msg);
  }

  function sendTextJSON() {
    liff.sendMessages(JSON.parse(data));
  }

  function sendMacro() {
    setInterval(() => {
      if (!(parseInt(data.MacroNum) >= 1 && parseInt(data.MacroNum) <= 5)) {
        return alert("1~5で入力してください。");
      }

      let msg = [];

      for (let i = 0; i < parseInt(data.MacroNum); i++) {
        msg.push({
          type: "text",
          text: data.MacroText,
        })
      }

      liff.sendMessages(msg);
    }, parseInt(data.MacroInterval));
  }

  return (
    <div>
      <t>通常メッセージ送信</t>
      <input
        type="text"
        placeholder="text"
        value={data.StaticText}
        onInput={(e) => setData({ ...data, StaticText: e.target.value })}
      />
      <button onClick={sendText}>Send</button>
      <t>メッセージ連投(1~5)</t>
      <input
        type="text"
        placeholder="text"
        className="range-input"
        value={data.RangeText}
        onInput={(e) => setData({ ...data, RangeText: e.target.value })}
      />
      <input
        type="number"
        placeholder="1~5"
        className="range-input-num"
        value={data.RangeNum}
        onInput={(e) => setData({ ...data, RangeNum: e.target.value })}
      />
      <button onClick={sendTextRange}>Send</button>
      <t>JSONメッセージ( [{"{ }"},{"{ }"}...] )</t>
      <input
        type="text"
        placeholder="[{ type: ~ , ... }, { ... }...]"
        value={data.RawText}
        onInput={(e) => setData({ ...data, RawText: e.target.value })}
      />
      <button onClick={sendTextJSON}>Send</button>
      <t>マクロ</t>
      <input
        type="text"
        placeholder="text"
        className="macro-input"
        value={data.MacroText}
        onInput={(e) => setData({ ...data, MacroText: e.target.value })}
      />
      <input
        type="number"
        placeholder="1~5"
        className="macro-input-num"
        value={data.MacroNum}
        onInput={(e) => setData({ ...data, MacroNum: e.target.value })}
      />
      <input
        type="number"
        placeholder="1000"
        className="macro-input-num"
        value={data.MacroInterval}
        onInput={(e) => setData({ ...data, MacroInterval: e.target.value })}
      />
      <button onClick={sendMacro} className="macro-btn">Send</button>

    </div>
  );
}
