import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Name from "./components/name";
import ContactInfo from "./components/contactinfo";
import Birthday from "./components/birthday";
function App() {
  let [step, changeStep] = useState(1);
  let [fName, changefname] = useState("");
  let [lName, changelname] = useState("");
  let [Email, changeEmail] = useState("");
  let [Phone, changePhone] = useState();
  let [DD, changeD] = useState();
  let [MM, changeM] = useState();
  let [YY, changeY] = useState();

  function changeNext() {
    if (step === 1 && (fName === "" || lName === "")) {
      alert("Fill the required fields");
    } else if (step === 2 && (Email === "" || Phone === "")) {
      alert("Fill the required fields");
    } else if (step === 3 && (DD === "" || MM === "" || YY === "")) {
      alert("Fill the required fields");
    } else {
      changeStep((prevStep) => prevStep + 1);
    }
  }

  function changePrev() {
    changeStep((prevStep) => prevStep - 1);
  }
  function renderComponents() {
    switch (step) {
      case 1:
        return (
          <Name fname={fnamedata} lname={lnamedata} F={fName} L={lName}></Name>
        );
      case 2:
        return (
          <div>
            <ContactInfo
              email={emailData}
              phone={phoneData}
              E={Email}
              P={Phone}
            ></ContactInfo>
          </div>
        );
      case 3:
        return (
          <Birthday
            dd={dData}
            mm={mData}
            yy={yData}
            D={DD}
            M={MM}
            Y={YY}
          ></Birthday>
        );
      default:
        return (
          <div>
            <h3 className=" text-center">Successfully Registered</h3>
            <p className="font-weight-bold ml-3">First Name: {fName}</p>
            <p className="font-weight-bold ml-3">Last Name: {lName}</p>
            <p className="font-weight-bold ml-3">Email: {Email}</p>
            <p className="font-weight-bold ml-3">Phone: {Phone}</p>
            <p className="font-weight-bold ml-3">
              Date of Birth: {DD}-{MM}-{YY}
            </p>
          </div>
        );
    }
  }

  function fnamedata(data) {
    changefname((fName = data));
  }

  function lnamedata(data) {
    changelname((lName = data));
  }

  function emailData(data) {
    changeEmail((Email = data));
  }

  function phoneData(data) {
    changePhone((Phone = data));
  }

  function dData(data) {
    changeD((DD = data));
  }

  function mData(data) {
    changeM((MM = data));
  }

  function yData(data) {
    changeY((YY = data));
  }
  function changeButton() {
    if (step === 1) {
      return (
        <div>
          <button className="btn btn-success m-2 ml-5" onClick={changeNext}>
            Next
          </button>
          <div className="text-center mt-4">
            <span
              style={{
                height: 15,
                width: 15,
                marginLeft: 2,
                backgroundColor: "#4CAF50",
                border: "none",
                borderRadius: 50,
                display: "inline-block",
                opacity: 1,
              }}
            ></span>
            <span
              style={{
                height: 15,
                width: 15,
                marginLeft: 2,
                backgroundColor: "#bbbbbb",
                border: "none",
                borderRadius: 50,
                display: "inline-block",
                opacity: 0.5,
              }}
            ></span>
            <span
              style={{
                height: 15,
                width: 15,
                marginLeft: 2,
                backgroundColor: "#bbbbbb",
                border: "none",
                borderRadius: 50,
                display: "inline-block",
                opacity: 0.5,
              }}
            ></span>
          </div>
        </div>
      );
    } else if (step === 2) {
      return (
        <div>
          <button className="btn btn-secondary m-2 ml-5" onClick={changePrev}>
            Prev
          </button>
          <button className="btn btn-success m-2 ml-5" onClick={changeNext}>
            Next
          </button>
          <div className="text-center  mt-4">
            <span
              style={{
                height: 15,
                width: 15,
                marginLeft: 2,
                backgroundColor: "#bbbbbb",
                border: "none",
                borderRadius: 50,
                display: "inline-block",
                opacity: 0.5,
              }}
            ></span>
            <span
              style={{
                height: 15,
                width: 15,
                marginLeft: 2,
                backgroundColor: "#4CAF50",
                border: "none",
                borderRadius: 50,
                display: "inline-block",
                opacity: 1,
              }}
            ></span>
            <span
              style={{
                height: 15,
                width: 15,
                marginLeft: 2,
                backgroundColor: "#bbbbbb",
                border: "none",
                borderRadius: 50,
                display: "inline-block",
                opacity: 0.5,
              }}
            ></span>
          </div>
        </div>
      );
    } else if (step === 3) {
      return (
        <div>
          <button className="btn btn-secondary m-2 ml-5" onClick={changePrev}>
            Prev
          </button>
          <button className="btn btn-success m-2 ml-5" onClick={changeNext}>
            Submit
          </button>
          <div className="text-center mt-4">
            <span
              style={{
                height: 15,
                width: 15,
                marginLeft: 2,
                backgroundColor: "#bbbbbb",
                border: "none",
                borderRadius: 50,
                display: "inline-block",
                opacity: 0.5,
              }}
            ></span>
            <span
              style={{
                height: 15,
                width: 15,
                marginLeft: 2,
                backgroundColor: "#bbbbbb",
                border: "none",
                borderRadius: 50,
                display: "inline-block",
                opacity: 0.5,
              }}
            ></span>
            <span
              style={{
                height: 15,
                width: 15,
                marginLeft: 2,
                backgroundColor: "#4CAF50",
                border: "none",
                borderRadius: 50,
                display: "inline-block",
                opacity: 1,
              }}
            ></span>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  return (
    <div style={{ backgroundColor: "gray", height: 635 }}>
      <div
        style={{
          backgroundColor: "white",
          marginLeft: 400,
          height: 450,
          width: 500,
        }}
      >
        <h1 className="text-center font-weight-bold">Register</h1>
        {renderComponents()}
        {changeButton()}
      </div>
    </div>
  );
}

export default App;
