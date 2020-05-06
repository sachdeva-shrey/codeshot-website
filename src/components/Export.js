import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

export function Export(ref) {
  let node = ref
  console.log(ref)
  domtoimage
    .toBlob((ref.current), {  })
    .then(function (blob) {
      saveAs(blob, "myImage.png");
    });
};