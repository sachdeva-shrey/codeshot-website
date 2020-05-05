import React, { useState } from "react";

export const ThemeContext = React.createContext("dracula");
export const LangContext = React.createContext("javascript");
export const FontContext = React.createContext("Raleway");
export const FontSizeContext = React.createContext("16px");
export const BackgroundColorContext = React.createContext("#f9f9f9");

const Store = ({ children }) => {
  const [editorTheme, setEditorTheme] = useState("dracula");
  const [lang, setLang] = useState("javascript");
  const [font, setFont] = useState("Raleway");
  const [fontSize, setFontSize] = useState("16px");
  const [backgroundColor, setBackgroundColor] = useState('#f9f9f9');
  console.log(fontSize)
  return (
    <ThemeContext.Provider value={[editorTheme, setEditorTheme]}>
      <LangContext.Provider value={[lang, setLang]}>
        <FontContext.Provider value={[font, setFont]}>
          <FontSizeContext.Provider value={[fontSize, setFontSize]}>
            <BackgroundColorContext.Provider value={[backgroundColor, setBackgroundColor]}>
              {children}
          </BackgroundColorContext.Provider>
          </FontSizeContext.Provider>
        </FontContext.Provider>
      </LangContext.Provider>
    </ThemeContext.Provider>
  );
};

export default Store;
