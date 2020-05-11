import React, { useContext } from "react";
import "semantic-ui-css/semantic.css";

import DropDown from "./Dropdown";
import BackgroundInput from "./BackgroundInput";
import { StoreContext } from "../utils/context/Store";
import { themeOptions } from "../utils/constants/options/themeOptions";
import { fontOptions } from "../utils/constants/options/fontOptions";
import { languageOptions } from "../utils/constants/options/languageOptions";
import "../lib/styles/sidenav-styles.css";
import font_icon from "../lib/icons/font_icon.svg";
import theme_icon from "../lib/icons/theme_icon.svg";
import language_icon from "../lib/icons/language_icon.svg";

const DropdownWrapper = () => {
  const { font, setFont } = useContext(StoreContext);
  const { editorTheme, setEditorTheme } = useContext(StoreContext);
  const { lang, setLang } = useContext(StoreContext);

  const handleThemeChange = (none, theme) => {
    setEditorTheme(theme.value);
  };

  const handleFontChange = (none, font) => {
    setFont(font.value);
  };

  const handleLanguageChange = (none, lang) => {
    setLang(lang.value);
  };

  return (
    <div className="side-nav">
      <DropDown
        header="Theme"
        iconSrc={theme_icon}
        iconAlt="theme_icon"
        options={themeOptions}
        placeholder="Material Ocean"
        defaultValue="material-ocean"
        onChange={handleThemeChange}
        selector={false}
      />
      <DropDown
        header="Font"
        iconSrc={font_icon}
        iconAlt="font_icon"
        options={fontOptions}
        placeholder="Fira Code"
        defaultValue="Fira Code"
        onChange={handleFontChange}
        selector={true}
      />
      <DropDown
        header="Language"
        iconSrc={language_icon}
        iconAlt="language_icon"
        options={languageOptions}
        placeholder="Javascript"
        defaultValue="javascript"
        onChange={handleLanguageChange}
        selector={false}
      />
      <BackgroundInput />
    </div>
  );
};

export default DropdownWrapper;
