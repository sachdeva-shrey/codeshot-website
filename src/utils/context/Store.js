import React, { useState } from "react";

export const StoreContext = React.createContext({});

const Store = ({ children }) => {
  const [editorTheme, setEditorTheme] = useState("material-ocean");
  const [lang, setLang] = useState("javascript");
  const [font, setFont] = useState("Fira Code");
  const [fontSize, setFontSize] = useState("16px");
  const [backgroundColor, setBackgroundColor] = useState("#40a9f3");
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
