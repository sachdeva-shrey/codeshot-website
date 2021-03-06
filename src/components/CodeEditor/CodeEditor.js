import React, { useState, useContext } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import styled from "styled-components";

import "./editor-styles.css";
import { StoreContext } from "../../utils/context/Store";
import {
  DEFAULT_LANG,
  DEFAULT_THEME,
  DEFAULT_SNIPPET,
} from "../../utils/constants/default/default";
import "codemirror/lib/codemirror.css";

export const StyledEditor = ({ editor }) => {
  const [snippet, setSnippet] = useState(`${DEFAULT_SNIPPET}`);
  const { editorTheme, lang, font, fontSize, backgroundColor } = useContext(StoreContext);

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
    <div className="container" ref={editor}>
      <EditorStyled
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

