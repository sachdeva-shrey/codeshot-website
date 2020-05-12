import React from "react";
import styled from "styled-components";

import shareCode from "./shareCode"
import exportCode from "./exportCode";
import shareIcon from "../../lib/icons/share_icon.svg";
import exportIcon from "../../lib/icons/export_icon.svg";

export function ExportButton({ takeSnap }) {
  function handleExport(editorDOM) {
    exportCode(editorDOM);
  }
  return (
    <>
      <Button onClick={() => handleExport(takeSnap)}>
        <Icon src={exportIcon} />
        Export
      </Button>
    </>
  );
}

const ShareButton = () => {
  function handleShare() {
    shareCode();
  }
  return (
    <>
      <Button onClick={() => handleShare()}>
        <Icon src={shareIcon} />
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
  color: #FFFFFF;
  height: 40px;
  width: 100px;
  margin-top: 20px;
  margin-left: 40px;
  outline: none;
  cursor: pointer;
`;

const Icon = styled.img`
  height: 16px;
  width: 16px;
  margin-right: 10px;
`;

const ButtonContainer = styled.div`
  position: fixed;
  top: 50px;
  left: 0;
  z-index: 10;
  margin-left: 40px;
`;

export default Buttons;