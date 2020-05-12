import React from "react";
import { Dropdown } from "semantic-ui-react";

import Selectors from "../Button/Selectors";

const SemanticDropdown = (props) => {
  const {
    iconSrc,
    iconAlt,
    header,
    options,
    placeholder,
    defaultValue,
    onChange,
    selector,
  } = props;
  
  return (
    <div className="wrapper-main">
      <img className="icon" src={iconSrc} alt={iconAlt} />
      <h1>{header}</h1>
      <Dropdown
        search
        selection
        options={options}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={onChange}
      />
      {selector && <Selectors />}
    </div>
  );
};

export default SemanticDropdown;
