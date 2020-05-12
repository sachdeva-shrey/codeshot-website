import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

export default function exportCode(editorDOM) {
  domtoimage.toBlob(editorDOM.current, {}).then(function (blob) {
    saveAs(blob, "codeshot.png");
  });
}
