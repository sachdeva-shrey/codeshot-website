import React from "react";
import "semantic-ui-css/semantic.css";
import styled from "styled-components";

import DropdownWrapper from "./Dropdown";
import "../lib/styles/dropdownStyles.css";
import Buttons from "./Button";
import logo from "../lib/icons/logo.png";

function SideNav({ takeSnap }) {
  return (
    <>
      <Logo src={logo} alt="logo" />
      <DropdownWrapper />
      <Buttons takeSnap={takeSnap} />
    </>
  );
}

const Logo = styled.img`
  position: fixed;
  top: 20px;
  left: 7%;
  z-index: 100;
  height: 30px;
  width: auto;
`;

export default SideNav;
