import React, { useContext } from "react";
import "semantic-ui-css/semantic.css";

import SemanticDropdown from "./Dropdown";
import BackgroundInput from "../Input/BackgroundInput";
import { StoreContext } from "../../utils/context/Store";
import { themeOptions } from "../../utils/constants/options/themeOptions";
import { fontOptions } from "../../utils/constants/options/fontOptions";
import { languageOptions } from "../../utils/constants/options/languageOptions";
import "../SideNav/sidenav-styles.css";
import fontIcon from "../../lib/icons/font_icon.svg";
import themeIcon from "../../lib/icons/theme_icon.svg";
import languageIcon from "../../lib/icons/language_icon.svg";

const DropdownWrapper = () => {
  const { setFont, setEditorTheme, setLang } = useContext(StoreContext);

  const handleThemeChange = (_, theme) => {
    setEditorTheme(theme.value);
  };

  const handleFontChange = (_, font) => {
    setFont(font.value);
  };

  const handleLanguageChange = (_, lang) => {
    setLang(lang.value);
  };

  return (
    <div className="side-nav">
      <SemanticDropdown
        header="Theme"
        iconSrc={themeIcon}
        iconAlt="themeIcon"
        options={themeOptions}
        placeholder="Material Ocean"
        defaultValue="material-ocean"
        onChange={handleThemeChange}
        selector={false}
      />
      <SemanticDropdown
        header="Font"
        iconSrc={fontIcon}
        iconAlt="fontIcon"
        options={fontOptions}
        placeholder="Fira Code"
        defaultValue="Fira-Code"
        onChange={handleFontChange}
        selector={true}
      />
      <SemanticDropdown
        header="Language"
        iconSrc={languageIcon}
        iconAlt="languageIcon"
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
