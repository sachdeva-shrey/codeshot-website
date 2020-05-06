import React, { useRef } from "react";
import "./App.css";
import { StyledEditor } from "./components/CodeEditor";
import SideNav from "./components/SideNav";

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
