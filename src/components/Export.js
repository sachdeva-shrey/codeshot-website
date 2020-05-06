import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

export default function Export(editorDOM) {
  domtoimage.toBlob(editorDOM.current, {}).then(function (blob) {
    saveAs(blob, "snapshot.png");
  });
}
