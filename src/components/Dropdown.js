import React, { useState, useContext } from "react";
import { Dropdown, Input } from "semantic-ui-react";
import "semantic-ui-css/semantic.css";
import styled from "styled-components";

import { ThemeContext, LangContext, BackgroundColorContext, FontContext } from "../utils/context/Store"
import { themeOptions } from '../utils/constants/options/themeOptions'
import { fontOptions } from '../utils/constants/options/fonts'
import { languageOptions } from '../utils/constants/options/languageOptions'
import { ExportButton } from "./Button";
import { ShareButton } from "./Button";
import Selectors from "./Selectors";
import "../lib/styles/dropdownStyles.css";
import font_icon from "../lib/icons/font_icon.svg";
import theme_icon from "../lib/icons/theme_icon.svg";
import background_icon from "../lib/icons/background_icon.svg";
import language_icon from "../lib/icons/language_icon.svg";

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

const DropdownWrapper = () => {
  const [font, setFont] = useContext(FontContext);
  const [color, setColor] = useState("#f9f9f9");
  const [theme, setTheme] = useContext(ThemeContext)
  const [lang, setLang] = useContext(LangContext)
  const [backgroundColor, setBackgroundColor] = useContext(BackgroundColorContext)

  const handleThemeChange = (none, theme) => {
    setTheme(theme.value);
  };

  const handleFontChange = (none, font) => {
    setFont(font.value);
    console.log(font.value)
  };

  const handleLanguageChange = (none, lang) => {
    setLang(lang.value);
  };

  const handlePreview = (e) => {
    setColor(e.target.value);
    if(e.target.value === '') {
      setBackgroundColor('#f9f9f9')
      setColor('#f9f9f9')
    }
    else setBackgroundColor(e.target.value)
    console.log(e.target.value);
  };

  return (
    <div className="side-nav">
      <div className="wrapper-main">
        <img className="icon" src={theme_icon} alt="theme_icon"></img>
        <h1>Theme</h1>
        <Dropdown
          className="dropdown"
          options={themeOptions}
          placeholder="Dracula"
          search
          selection
          defaultValue="dracula"
          onChange={handleThemeChange}
        />
      </div>
      <div className="wrapper-main">
        <img className="icon" src={font_icon} alt="font_icon"></img>
        <h1>Font</h1>
        <Dropdown
          className="dropdown"
          options={fontOptions}
          placeholder="Raleway"
          search
          selection
          defaultValue="Raleway"
          onChange={handleFontChange}
        />
        <Selectors />
      </div>
      <div className="wrapper-main">
        <img className="icon" src={language_icon} alt="language_icon"></img>
        <h1>Language</h1>
        <Dropdown
          className="dropdown"
          options={languageOptions}
          placeholder="Javascript"
          search
          selection
          defaultValue="javascript"
          onChange={handleLanguageChange}
        />
      </div>
      <div className="wrapper-main">
        <img className="icon" src={background_icon} alt="background_icon"></img>
        <h1>Background Color</h1>
        <Container>
          <ColorPreview color={color}></ColorPreview>
          <Input placeholder="#F9F9F9" onChange={handlePreview} />
        </Container>
      </div>
      <ExportButton />
      <ShareButton />
    </div>
  );
};

export default DropdownWrapper;
