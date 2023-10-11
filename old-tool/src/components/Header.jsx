import React from 'react'
import BoxIcon from "../static/box-icon.png";
import GithubICon from "../static/github.svg";
import TwitterIcon from "../static/twitter.svg";

export default function Header() {
    return (
        <div className='header flex'>
            <div className='flex'>
                <a href="/">
                    <img src={BoxIcon} width="0" className='header-icon' alt="Icon" />
                </a>
                <h1 className='text-c1'>LINE-Tool-Box</h1>
            </div>
            <div className='flex icons'>
                <a href='https://github.com/EdamAme-x/line-tool-box?openExternalBrowser=1'>
                    <img src={GithubICon} width="22.5" alt="Icon" />
                </a>
                <a href='https://twitter.com/amex2189?openExternalBrowser=1'>
                    <img src={TwitterIcon} width="22.5" alt="Icon" />
                </a>
            </div>
        </div>
    )
}
