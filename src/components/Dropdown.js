import React, { useContext } from "react";
import { Dropdown, Input } from "semantic-ui-react";
import "semantic-ui-css/semantic.css";
import styled from "styled-components";

import { StoreContext } from "../utils/context/Store";
import { themeOptions } from "../utils/constants/options/themeOptions";
import { fontOptions } from "../utils/constants/options/fontOptions";
import { languageOptions } from "../utils/constants/options/languageOptions";
import Selectors from "./Selectors";
import "../lib/styles/sidenavStyles.css";
import font_icon from "../lib/icons/font_icon.svg";
import theme_icon from "../lib/icons/theme_icon.svg";
import background_icon from "../lib/icons/background_icon.svg";
import language_icon from "../lib/icons/language_icon.svg";

const DropdownWrapper = () => {
  const { font, setFont } = useContext(StoreContext);
  const { editorTheme, setEditorTheme } = useContext(StoreContext);
  const { lang, setLang } = useContext(StoreContext);
  const { backgroundColor, setBackgroundColor } = useContext(StoreContext);

  const handleThemeChange = (none, theme) => {
    setEditorTheme(theme.value);
  };

  const handleFontChange = (none, font) => {
    setFont(font.value);
  };

  const handleLanguageChange = (none, lang) => {
    setLang(lang.value);
  };

  const handlePreview = (e) => {
    if (e.target.value === "") {
      setBackgroundColor("#F9F9F9");
    } else setBackgroundColor(e.target.value);
  };

  return (
    <div className="side-nav">
      <div className="wrapper-main">
        <img className="icon" src={theme_icon} alt="theme_icon"></img>
        <h1>Theme</h1>
        <Dropdown
          className="dropdown"
          search
          selection
          options={themeOptions}
          placeholder="Dracula"
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
          placeholder="Fira Code"
          search
          selection
          defaultValue="Fira Code"
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
          <ColorPreview color={backgroundColor}></ColorPreview>
          <Input placeholder="#F9F9F9" onChange={handlePreview} />
        </Container>
      </div>
    </div>
  );
};

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

export default DropdownWrapper;
