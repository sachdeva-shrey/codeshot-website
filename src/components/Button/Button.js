import React, { useState } from "react";
import styled from "styled-components";

import shareCode from "./shareCode";
import exportCode from "./exportCode";
import shareIcon from "../../lib/icons/share_icon.svg";
import exportIcon from "../../lib/icons/export_icon.svg";

export function ExportButton({ takeSnap }) {
  const [isExported, setExported] = useState(false);
  function handleExport(editorDOM) {
    setExported(true);
    exportCode(editorDOM);
  }
  return (
    <>
      <Button onClick={() => handleExport(takeSnap)}>
        <Icon src={exportIcon} />
        {isExported ? "Exporting" : "Export"}
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
    <div>
      <ExportButton takeSnap={takeSnap} />
      <ShareButton />
    </div>
  );
};

const Button = styled.button`
  background-color: #16171b;
  border: none;
  border-radius: 5px;
  padding: 10px;
  color: #ffffff;
  height: 40px;
  width: 120px;
  margin-left: 45px;
  margin-top: 20px;
  outline: none;
  cursor: pointer;
`;

const Icon = styled.img`
  height: 16px;
  width: 16px;
  margin-right: 10px;
`;

export default Buttons;
