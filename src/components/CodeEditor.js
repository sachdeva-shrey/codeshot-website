import React, { useState, useContext } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import styled from "styled-components";
import * as WebFont from "webfontloader";

import "../lib/styles/editorStyles.css";
import { StoreContext } from "../utils/context/Store";
import { DEFAULT_FONTS } from "../utils/constants/options/fonts";
import {
  DEFAULT_LANG,
  DEFAULT_THEME,
  DEFAULT_SNIPPET,
} from "../utils/constants/default/default";

import "codemirror/lib/codemirror.css";
import themes from "../utils/imports/modes";

export const StyledEditor = ({ editor }) => {
  const [snippet, setSnippet] = useState(`${DEFAULT_SNIPPET}`);
  const { editorTheme, setEditorTheme } = useContext(StoreContext);
  const { lang, setLang } = useContext(StoreContext);
  const { font, setFont } = useContext(StoreContext);
  const { fontSize, setFontSize } = useContext(StoreContext);
  const { backgroundColor, setBackgroundColor } = useContext(StoreContext);

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

  return (
    <div ref={editor}>
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
    </div>
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
  background-color: ${(props) => props.backgroundColor};
  font-size: ${(props) => props.fontSize};
`;

const Wrapper = styled.div``;
