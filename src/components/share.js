import domtoimage from "dom-to-image";
import React from "react";

export default function share() {
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
