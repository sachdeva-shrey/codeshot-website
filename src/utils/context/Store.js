import React, { useState } from "react";

import {
  DEFAULT_THEME,
  DEFAULT_BACKGROUND,
  DEFAULT_LANG,
  DEFAULT_FONT,
  DEFAULT_FONT_SIZE
} from "../constants/default/default";

export const StoreContext = React.createContext({});

const Store = ({ children }) => {
  const [editorTheme, setEditorTheme] = useState(`${DEFAULT_THEME}`);
  const [lang, setLang] = useState(`${DEFAULT_LANG}`);
  const [font, setFont] = useState(`${ DEFAULT_FONT }`);
  const [backgroundColor, setBackgroundColor] = useState(`${DEFAULT_BACKGROUND}`);
  const [fontSize, setFontSize] = useState(`${DEFAULT_FONT_SIZE}`);
  return (
    <StoreContext.Provider
      value={{
        editorTheme,
        setEditorTheme,
        lang,
        setLang,
        font,
        setFont,
        fontSize,
        setFontSize,
        backgroundColor,
        setBackgroundColor,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default Store;
