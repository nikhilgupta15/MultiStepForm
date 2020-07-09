import React, { useState } from "react";

function Name(props) {
  let [fname, changefName] = useState("");
  let [lname, changelName] = useState("");

  function onChangefName(e) {
    changefName((fname = e.target.value));
    props.fname(fname);
  }

  function onChangelName(e) {
    changelName((lname = e.target.value));
    props.lname(lname);
  }

  return (
    <div>
      <h3 className="font-weight-normal ml-5">Name: </h3>
      <p className="font-weight-normal ml-5 text-danger">
        {" "}
        * All fields are mandatory
      </p>
      <form className="mt-3">
        <div class="form-group">
          <input
            type="text"
            class="form-control mt-1  ml-5 w-50"
            id="formGroupExampleInput"
            placeholder="First Name..."
            onChange={onChangefName}
            value={props.F}
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control mt-1 ml-5 w-50"
            id="formGroupExampleInput2"
            placeholder="Last Name..."
            onChange={onChangelName}
            value={props.L}
          />
        </div>
      </form>
    </div>
  );
}

export default Name;
