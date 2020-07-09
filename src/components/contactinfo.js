import React, { useState } from "react";

function ContactInfo(props) {
  let [Email, changeEmail] = useState("");
  let [Phone, changePhone] = useState();

  function onChangeEmail(e) {
    changeEmail((Email = e.target.value));
    props.email(Email);
  }

  function onChangePhone(e) {
    changePhone((Phone = e.target.value));
    props.phone(Phone);
  }
  return (
    <div>
      <h3 className="font-weight-normal ml-5">Contact Info: </h3>
      <p className="font-weight-normal ml-5 text-danger">
        {" "}
        * All fields are mandatory
      </p>
      <form className="mt-3">
        <div class="form-group">
          <input
            type="text"
            class="form-control mt-1 ml-5 w-50"
            id="formGroupExampleInput"
            placeholder="Email..."
            onChange={onChangeEmail}
            value={props.E}
          />
        </div>
        <div class="form-group">
          <input
            type="number"
            class="form-control mt-1 ml-5 w-50"
            id="formGroupExampleInput2"
            placeholder="Phone No..."
            onChange={onChangePhone}
            value={props.P}
          />
        </div>
      </form>
    </div>
  );
}

export default ContactInfo;
