import React from "react";
import "semantic-ui-css/semantic.css";

import DropdownWrapper from "./Dropdown";
import "../lib/styles/dropdownStyles.css";
import Buttons from "./Button";

function SideNav ({ takeSnap }) {
  return (
    <>
      <DropdownWrapper />
      <Buttons takeSnap={takeSnap} />
    </>
  );
};

export default SideNav;
