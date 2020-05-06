import React, { useRef } from "react";
import "./App.css";
import { StyledEditor } from "./components/CodeEditor";
import SideNav from "./components/SideNav";

function App() {
  const view = useRef();
  return (
    <div className="App">
      <SideNav takeSnap={view} />
      <StyledEditor myRef={view} />
    </div>
  );
}

export default App;
