import React from "react";
import "./App.css";
import { StyledEditor } from "./components/CodeEditor";
import SideNav from "./components/SideNav";
import GlobalFonts from './lib/styles/globalStyles';

function App() {
  return (
    <div className="App">
      <GlobalFonts />
      <div class="wrapper">
        <SideNav />
        <StyledEditor />
      </div>
    </div>
  );
}

export default App;
