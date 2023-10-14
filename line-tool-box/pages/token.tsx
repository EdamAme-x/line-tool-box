import { liff } from "@line/liff";
import { getLiffId } from "@/utils/getLiffId";

export default function Token() {
    liff.init({
        liffId: getLiffId()
    }).then(() => {
        if (liff.isInClient()) {
            liff.sendMessages([{
                type: "text",
                text: " == Token == "
            }, {
                type: "text",
                text: liff.getAccessToken() || "Sorry Bad Do"
            }])
        }
    })

    return <>
        <p>読み込み中です。 (画面を閉じないで待ってください。)</p>
    </>
}