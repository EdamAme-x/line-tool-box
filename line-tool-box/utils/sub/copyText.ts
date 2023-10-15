import * as Swal from 'sweetalert2';

export function copyText(text: string) {
  navigator.clipboard.writeText(text).then(function() {
    // @ts-ignore
    Swal.fire({
      html: "コピーされました！"
    })
  }).catch(function(err) {
    console.error("Async: Could not copy text: ", err);
    // @ts-ignore
    Swal.fire({
      html: "コピーに失敗しました！"
    })
  });
}
