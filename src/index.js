import React from "react";
import ReactDOM from "react-dom";
import Accordion from "../components/accordion";
import Accordion1 from "../components/accordion1";
import Accordion2 from "../components/accordion2";
import Toolbar from "../components/toolbar";

// import { Container } from "reactstrap";
// import FormPage from "../components/forms";
import "./styles.css";

// import App from "./App";

function App() {
  return (
    <div className="App">
      <Toolbar />
      <Accordion title="ADD USER" />

      <Accordion1 title="DELETE USER" content="LOREM IPSUM " />

      <Accordion2
        title="CHOOSE FLAG"
        content="<p>LOREM IPSUM</p><br>LOREM IPSUM "
      />
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
