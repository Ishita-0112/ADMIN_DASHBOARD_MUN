import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styleinput.css";
// import {
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBInput,
//   MDBBtn,
//   MDBCard,
//   MDBCardBody
// } from "mdbreact";

// const FormPage = () => {
function FormPage() {
  return (
    <div id="Layout">
      <div className="pure-g">
        <form className="pure-form">
          <fieldset>
            {/* <input type="email" placeholder="example@example.com" className='form__field' /> */}
            <div class="form__group field">
              <input
                type="input"
                class="form__field"
                placeholder="Name"
                name="name"
                id="name"
                required
              />
              <label for="name" class="form__label">
                Name
              </label>
            </div>{" "}
            <br />
            <div class="form__group field">
              <input
                type="input"
                class="form__field"
                placeholder="Email"
                name="email"
                id="email"
                required
              />
              <label for="email" class="form__label">
                Email
              </label>
            </div>
            <br />
            <button className="btn" type="submit">
              ADD
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default FormPage;
