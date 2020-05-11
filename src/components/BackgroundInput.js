import React, { useContext } from "react";
import { Input } from "semantic-ui-react";
import styled from "styled-components";

import { StoreContext } from "../utils/context/Store";
import background_icon from "../lib/icons/background_icon.svg";

const BackgroundInput = () => {
  const { backgroundColor, setBackgroundColor } = useContext(StoreContext);

  const handlePreview = (e) => {
    if (e.target.value === "") {
      setBackgroundColor("#F9F9F9");
    } else setBackgroundColor(e.target.value);
  };
  return (
    <div className="wrapper-main">
      <img className="icon" src={background_icon} alt="background_icon" />
      <h1>Background Color</h1>
      <Container>
        <ColorPreview color={backgroundColor}></ColorPreview>
        <Input placeholder="#F9F9F9" onChange={handlePreview} />
      </Container>
    </div>
  );
};

export default BackgroundInput;

const ColorPreview = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 5px;
  margin-right: 10px;
  background-color: ${(props) => props.color};
`;

const Container = styled.div`
  display: flex;
`;
