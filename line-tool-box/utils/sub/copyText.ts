import * as Swal from 'sweetalert2';

export function copyText(text: string) {
  navigator.clipboard.writeText(text).then(function() {
    Swal.fire({
      html: "コピーされました！"
    })
  }).catch(function(err) {
    Swal.fire({
      html: "コピーに失敗しました！"
    })
  });
}
