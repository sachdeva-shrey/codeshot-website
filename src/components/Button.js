import React, { createRef } from "react";
import styled from "styled-components";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

import { Export } from "./Export";
import share_icon from "../lib/icons/share_icon.svg";
import export_icon from "../lib/icons/export_icon.svg";

export function ExportButton ({ takeSnap }) {
  function handleClick(a) {
    let node = a.current;
    domtoimage.toBlob(node, { width: node.scrollWidth}).then(function (blob) {
      saveAs(blob, "myImage.png");
    });
  }

  return (
    <>
      <Button onClick={() => handleClick(takeSnap)}>
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

const Buttons = ({ takeSnap }) => {
  return (
    <ButtonContainer>
      <ExportButton takeSnap={takeSnap} />
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
`;

export default Buttons;
