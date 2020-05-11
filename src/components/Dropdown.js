import React from "react";
import { Dropdown } from "semantic-ui-react";

import Selectors from "./Selectors";

// RIP "DRY"
const DropDown = (props) => {
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

  if (selector) {
    return (
      <div className="wrapper-main">
        <img className="icon" src={iconSrc} alt={iconAlt}></img>
        <h1>{header}</h1>
        <Dropdown
          search
          selection
          options={options}
          placeholder={placeholder}
          defaultValue={defaultValue}
          onChange={onChange}
        />
        <Selectors />
      </div>
    );
  } else {
    return (
      <div className="wrapper-main">
        <img className="icon" src={iconSrc} alt={iconAlt}></img>
        <h1>{header}</h1>
        <Dropdown
          search
          selection
          options={options}
          placeholder={placeholder}
          defaultValue={defaultValue}
          onChange={onChange}
        />
      </div>
    );
  }
};

export default DropDown;
