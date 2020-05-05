import React, { useContext } from "react";
import styled from "styled-components";
import { FontSizeContext } from "../utils/context/Store";

const Button = styled.button`
  /* Same as above */
`;

const ButtonToggle = styled(Button)`
  opacity: 0.6;
  border: none;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  margin-top: 20px;
  margin-right: 20px;
  outline: none;
  background-color: #202125;
  cursor: pointer;

  ${({ active }) =>
    active &&
    `
    background-color: #000;
    opacity: 1;
  `}
`;

const ButtonGroup = styled.div`
  display: flex;
`;

export default function Selectors() {
  const types = ["H1", "H2", "H3", "H4"];
  const [fontSize, setFontSize] = useContext(FontSizeContext);
  let size;

  const handleClick = (e) => {
    if(e.target.value === 'H1') {
      size = '20px'
    }
    else if(e.target.value === 'H2') {
      size = '18px'
    }
    else if(e.target.value === 'H3') {
      size = '16px'
    }
    else if(e.target.value === 'H4') {
      size = '14px'
    }
    setFontSize(size)
  }

  return (
      <ButtonGroup>
        {types.map((type) => (
          <ButtonToggle
            key={type}
            active={type[0]}
            value={type}
            onClick={handleClick}
          >
            {type}
          </ButtonToggle>
        ))}
      </ButtonGroup>
  );
}


