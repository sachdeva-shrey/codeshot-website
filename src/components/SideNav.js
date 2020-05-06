import React from "react";
import "semantic-ui-css/semantic.css";

import DropdownWrapper from "./Dropdown";
import "../lib/styles/dropdownStyles.css";
import Buttons from "./Button";
import { ExportButton } from "./Button";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

function SideNav ({ takeSnap }) {

  // function handleClick(a) {
  //   domtoimage.toBlob(a.current, {}).then(function (blob) {
  //     saveAs(blob, "myImage.png");
  //   });
  // }

  return (
    <>
      <DropdownWrapper />
      <Buttons takeSnap={takeSnap} />
      {/* <ExportButton onClick={() => handleClick(takeSnap)} /> */}
    </>
  );
};

export default SideNav;
