import React, { useRef } from "react";
import "./App.css";
import { StyledEditor } from "./components/CodeEditor/CodeEditor";
import SideNav from "./components/SideNav/SideNav";

/* Import all themes from CodeMirror */
const allThemes = ((theme) => {
  let keys = theme.keys();
  let values = keys.map(theme);
  return keys.reduce((arr, index, pos) => {
    arr[index] = values[pos];
    return arr;
  }, {});
})(require.context("codemirror/theme", true, /.*/));

/* Import all modes from CodeMirror */
const allModes = ((mode) => {
  let keys = mode.keys();
  let values = keys.map(mode);
  return keys.reduce((arr, index, pos) => {
    arr[index] = values[pos];
    return arr;
  }, {});
})(require.context("codemirror/mode", true, /^.*\.js$/));

function App() {
  const editor = useRef();
  return (
    <div className="App">
      <SideNav takeSnap={editor} />
      <StyledEditor editor={editor} />
    </div>
  );
}

export default App;
