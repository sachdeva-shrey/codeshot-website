import React, { useContext } from "react";
import styled from "styled-components";

import { StoreContext } from "../utils/context/Store";

const Selectors = () => {
  const types = ["H1", "H2", "H3", "H4"];
  const {fontSize, setFontSize} = useContext(StoreContext);
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

export default Selectors

const Button = styled.button`
  /* Same as above */
`;

const ButtonToggle = styled(Button)`
  opacity: 0.6;
  border: none;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
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
  &:hover {
    background-color: #202125;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
`;

