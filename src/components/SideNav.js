import React from "react";
import "semantic-ui-css/semantic.css";

import DropdownWrapper from "./Dropdown";
import "../lib/styles/dropdownStyles.css"
import Buttons from "./Button";

const SideNav = () => {
  return (
    <>
      <DropdownWrapper />
      <Buttons />
    </>
  );
};

export default SideNav;
