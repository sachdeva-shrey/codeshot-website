import React, { useState, useContext, useEffect } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import styled from "styled-components";
import * as WebFont from "webfontloader";

import "../lib/styles/editorStyles.css";
import { StoreContext } from "../utils/context/Store";
import { DEFAULT_FONTS } from '../utils/constants/options/fonts'
import { DEFAULT_LANG } from '../utils/constants/default/default'
import { DEFAULT_THEME } from '../utils/constants/default/default'
import { DEFAULT_SNIPPET } from '../utils/constants/default/default'

import "codemirror/lib/codemirror.css";
import themes from '../utils/imports/modes'


export const StyledEditor = () => {
  const [snippet, setSnippet] = useState(`${DEFAULT_SNIPPET}`);
  const {editorTheme, setEditorTheme} = useContext(StoreContext);
  const {lang, setLang} = useContext(StoreContext);
  const {font, setFont} = useContext(StoreContext);
  const {fontSize, setFontSize} = useContext(StoreContext);
  const {backgroundColor, setBackgroundColor} = useContext(StoreContext)
  WebFont.load({
    google: {
      families: DEFAULT_FONTS,
    },
  });

  const OPTIONS = {
    theme: `${editorTheme}` || DEFAULT_THEME,
    fontFamily: `${font}`,
    autoCloseBrackets: true,
    cursorScrollMargin: 48,
    mode: `${lang}` || DEFAULT_LANG,
    lineNumbers: false,
    indentUnit: 2,
    tabSize: 2,
    styleActiveLine: true,
    viewportMargin: 99,
  };

  const onChange = (editor, data, value) => {
    setSnippet(value);
  };

  useEffect(() => {
    console.log("font selected", font)
    console.log("theme", editorTheme)
    console.log("lang", lang)
    console.log("font size", fontSize)
    console.log("color", backgroundColor)
  }, [font, editorTheme, fontSize, backgroundColor])

  return (
    <>
      <Wrapper>
        <EditorStyled
        className="container"
        value={snippet}
        options={OPTIONS}
        onBeforeChange={onChange}
        backgroundColor={backgroundColor}
        fontSize={fontSize}
        font={font}
      />
        <Style code={snippet} />
        <style jsx>{`
          .CodeMirror {
            font-family: ${font} !important;
          }
        `}</style>
      </Wrapper>
    </>
  );
};

export const Style = (props) => {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: props.code,
      }}
    />
  );
};

const EditorStyled = styled(CodeMirror)`
  font-family: ${props => props.font};
  background-color: ${(props) => props.backgroundColor};
  font-size: ${(props) => props.fontSize};
`;

const Wrapper = styled.div`
`;
