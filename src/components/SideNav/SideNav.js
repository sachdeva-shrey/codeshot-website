import React from "react";
import "semantic-ui-css/semantic.css";
import styled from "styled-components";

import DropdownWrapper from "../Dropdown/DropdownWrapper";
import Buttons from "../Button/Button";
import logo from "../../lib/icons/logo.png";

function SideNav({ takeSnap }) {
  return (
    <div className="side-nav">
      <Logo src={logo} alt="logo" />
      <Buttons takeSnap={takeSnap} />
      <DropdownWrapper />
    </div>
  );
}

const Logo = styled.img`
  display: block;
  margin: 0 auto;
  margin-bottom: 10px;
  height: 30px;
  width: auto;
`;

export default SideNav;
