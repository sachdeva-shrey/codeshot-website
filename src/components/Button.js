import React, { createRef } from "react";
import styled from "styled-components";

import { Export } from "./Export";
import share_icon from "../lib/icons/share_icon.svg";
import export_icon from "../lib/icons/export_icon.svg";

const ExportButton = () => {
  const ref = createRef();
  const handleClick = () => {
    return Export(ref);
  };
  return (
    <>
      <Button
        ref={ref}
        onClick={handleClick}
      >
        <Icon src={export_icon} />
        Export
      </Button>
    </>
  );
};

const ShareButton = () => {
  return (
    <>
      <Button>
        <Icon src={share_icon} />
        Share
      </Button>
    </>
  );
};

const Buttons = () => {
  return (
    <ButtonContainer>
      <ExportButton />
      <ShareButton />
    </ButtonContainer>
  );
};

const Button = styled.button`
  background-color: #16171b;
  border: none;
  border-radius: 5px;
  padding: 10px;
  color: #fff;
  height: 40px;
  width: 100px;
  margin-top: 20px;
  margin-left: 60px;
  outline: none;
  cursor: pointer;
`;

const Icon = styled.img`
  height: 20px;
  width: 20px;
  margin-right: 10px;
`;

const ButtonContainer = styled.div`
  position: fixed;
  bottom: 50px;
  left: 0;
  z-index: 10;
`

export default Buttons
