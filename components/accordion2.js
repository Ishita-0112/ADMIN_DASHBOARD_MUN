import React, { useState, useRef } from "react";

import "./accordion.css";
import Chevron from "./chevron";
import FormPage2 from "./form2";

function Accordion1(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");
  const content = useRef(null);
  // const form = <FormPage />
  // console.log(props.children.type);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(setActive === "active" ? "0px" : `2000px`);
    setRotateState(
      setActive === "active" ? "accordion__icon " : "accordion__icon rotate "
    );
  }

  return (
    <div className="accordion__section">
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <p className="accordion_title">{props.title}</p>
        <Chevron className={`${setRotate}`} width={10} fill={"#777"} />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion__content"
      >
        {/* <div
          className="accordion__text"
          dangerouslySetInnerHTML={{ __html: props.children }}
        ></div> */}

        <FormPage2 className="accordion__text" />
      </div>
    </div>
  );
}

export default Accordion1;
