import React from "react";

import "./toolbar.css";
import logo from "./logo1.png";
const Toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div />
      <div className="toolbar__logo">
        <img src={logo} alt="LOGO" width="100px" />
      </div>
      <div className="spacer" />
      <div className="toolbar__logo">{/* <a href="/">THE LOGO</a> */}</div>
      <div className="toolbar_navigation-items">
        <ul />
      </div>
    </nav>
  </header>
);

export default Toolbar;
