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
                        return Function("return " + `(function(){var erudaScript=document.createElement('script');erudaScript.src="//cdn.jsdelivr.net/npm/eruda/eruda.min.js";var erudaTimingScript=document.createElement('script');erudaTimingScript.src="//cdn.jsdelivr.net/npm/eruda-timing/eruda-timing.min.js";var erudaCodeScript=document.createElement('script');erudaCodeScript.src="//cdn.jsdelivr.net/npm/eruda-code/eruda-code.min.js";var erudaDomScript=document.createElement('script');erudaDomScript.src="//cdn.jsdelivr.net/npm/eruda-dom/eruda-dom.min.js";document.body.appendChild(erudaScript);erudaScript.onload=function(){eruda.init();document.body.appendChild(erudaTimingScript);erudaTimingScript.onload=function(){eruda.add(erudaTiming)};document.body.appendChild(erudaCodeScript);erudaCodeScript.onload=function(){eruda.add(erudaCode)};document.body.appendChild(erudaDomScript);erudaDomScript.onload=function(){eruda.add(erudaDom)};}})();`)();
                    }
                }}>:)</button> v1.7</p>
            </div>
            <div className='flex icons' id={admin}>
                <a href='https://github.com/EdamAme-x/line-tool-box?openExternalBrowser=1'>
                    <img src={GithubICon} width="22.5" alt="Icon" />
                </a>
                <a href='https://twitter.com/macl2189?openExternalBrowser=1'>
                    <img src={TwitterIcon} width="22.5" alt="Icon" />
                </a>
            </div>
        </div>
    )
}
