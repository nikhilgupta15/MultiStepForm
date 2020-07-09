import React, { useState } from "react";

function Birthday(props) {
  let [DD, changeD] = useState();
  let [MM, changeM] = useState();
  let [YY, changeY] = useState();

  function onChangeD(e) {
    changeD((DD = e.target.value));
    props.dd(DD);
  }

  function onChangeM(e) {
    changeM((MM = e.target.value));
    props.mm(MM);
  }

  function onChangeY(e) {
    changeY((YY = e.target.value));
    props.yy(YY);
  }

  return (
    <div>
      <h3 className="font-weight-normal ml-5">Date of Birth: </h3>
      <p className="font-weight-normal ml-5 text-danger">
        {" "}
        * All fields are mandatory
      </p>
      <form className="mt-3">
        <div class="form-group ">
          <input
            type="number"
            class="form-control mt-1 ml-5 w-50"
            id="formGroupExampleInput"
            placeholder="Day(dd)..."
            onChange={onChangeD}
            value={props.D}
          />
        </div>
        <div class="form-group">
          <input
            type="number"
            class="form-control mt-1 ml-5 w-50"
            id="formGroupExampleInput2"
            placeholder="Month(mm)..."
            onChange={onChangeM}
            value={props.M}
          />
        </div>
        <div class="form-group">
          <input
            type="number"
            class="form-control mt-1 ml-5 w-50"
            id="formGroupExampleInput2"
            placeholder="Year(yyyy)..."
            onChange={onChangeY}
            value={props.Y}
          />
        </div>
      </form>
    </div>
  );
}

export default Birthday;
