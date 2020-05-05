import React from "react";
import styled from "styled-components";

import { Export } from "./Export";
import share_icon from "../lib/icons/share_icon.svg";
import export_icon from "../lib/icons/export_icon.svg";

const Button = styled.button`
  background-color: #16171b;
  border: none;
  border-radius: 5px;
  padding: 10px;
  color: #fff;
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

export const ExportButton = () => {
  const handleClick = () => {
    return (
      Export()
    )
  };

  return (
    <>
      <Button onClick={handleClick}>
        <Icon src={export_icon} />
        Export
      </Button>
    </>
  );
};

export const ShareButton = () => {
  return (
    <>
      <Button>
        <Icon src={share_icon} />
        Share
      </Button>
    </>
  );
};
