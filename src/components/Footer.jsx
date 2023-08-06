import React, { useState } from 'react'
import GithubICon from "../static/github.svg";
import TwitterIcon from "../static/twitter.svg";

export default function Header() {
    const [admin, setAdmin] = useState(false)
    return (
        <div className='footer flex'>
            <div>
                <p>&copy; 2023~ ame-x / @macl2189</p>
                <p>All rights reserved. <button onClick={() => {
                    if (prompt("password") === "yoshi") {
                        setAdmin(true)
                    }
                }}>:)</button></p>
            </div>
            <div className='flex icons'>
                <a href='https://github.com/EdamAme-x/line-tool-box?openExternalBrowser=1'>
                    <img src={GithubICon} width="22.5" alt="Icon" />
                </a>
                <a href='https://twitter.com/macl2189?openExternalBrowser=1'>
                    <img src={TwitterIcon} width="22.5" alt="Icon" />
                </a>
                {
                    admin && <><script src="https://cdnjs.cloudflare.com/ajax/libs/eruda/1.4.3/eruda.min.js"></script><script>{"eruda.init(); alert('boot')"}</script></>
                }
            </div>
        </div>
    )
}
