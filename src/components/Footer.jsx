import React from 'react'
import GithubICon from "../static/github.svg";
import TwitterIcon from "../static/twitter.svg";

export default function Header() {
    return (
        <div className='footer flex'>
            <div>
                <p>&copy; 2023~ ame-x / @macl2189</p>
                <p>All rights reserved.</p>
            </div>
            <div className='flex icons'>
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
