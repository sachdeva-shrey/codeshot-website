import domtoimage from "dom-to-image";

export default function shareCode() {
  var node = document.getElementById("root");

  domtoimage
    .toPng(node)
    .then(function (dataUrl) {
      var img = new Image();
      img.src = dataUrl;
    //   document.body.appendChild(img);
    })
    .catch(function (error) {
      console.error("oops, something went wrong!", error);
    });
}
