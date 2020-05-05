import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

export function Export() {
  domtoimage
    .toBlob(document.getElementById("root"), { width: 1080, height: 1080 })
    .then(function (blob) {
      saveAs(blob, "myImage.png");
    });
}
