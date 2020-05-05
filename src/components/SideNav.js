import React, { useState } from "react";
import "semantic-ui-css/semantic.css";

import DropdownWrapper from "./Dropdown";
import "../lib/styles/dropdownStyles.css";


const SideNav = () => {
  const [color, setColor] = useState("#202125");

  const handlePreview = (e) => {
    setColor(e.target.value);
    console.log(e.target.value);
  };

  return (
      <DropdownWrapper />
  );
};

export default SideNav;
