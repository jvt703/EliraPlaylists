import { React, useRef, useState } from "react";

const RegisterModal = ({ updateOpenModal }) => {
  const modalRef = useRef();
  const [registerObjData, setregisterObjData] = useState({});

  const getInputs = (value, name) => {
    let data = { [name]: value };
    setregisterObjData({ ...registerObjData, ...data });
  };

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      updateOpenModal(false);
    }
  };

  const registerHandler = async (e) => {
    e.preventDefault();
    if (registerObjData.password.length < 8) {
      alert("Password Must Be At Least 8 Characters");
    } else {
      const response = await fetch(`http://localhost:3001/app/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerObjData),
      })
        .then((response) => response.json())
        .then((result) => {
            console.log(result,"the results")
            location.reload();
        })
        .catch(console.error);
    }
  };

  return (
    <div className="modalBackground" ref={modalRef} onClick={closeModal}>
      <div className="modalContainer">
        <div className="modalClosebutton">
          <button
            onClick={() => {
              updateOpenModal(false);
            }}
          >
            {" "}
            X{" "}
          </button>
        </div>
        <div className="modalTitle">
          <h1>Register a new account</h1>
        </div>
        <form onSubmit={registerHandler} id="registerForm">
          <div className="modalBody">
            <label>Email</label>
            <input
              placeholder="Example@gmail.com"
              name="email"
              onChange={(e) => {
                getInputs(e.target.value, e.target.name);
              }}
            ></input>

            <label>Username</label>
            <input
              placeholder="Username"
              name="username"
              onChange={(e) => {
                getInputs(e.target.value, e.target.name);
              }}
            ></input>

            <label>Password</label>
            <input
              placeholder="Password"
              name="password"
              onChange={(e) => {
                getInputs(e.target.value, e.target.name);
              }}
            ></input>
          </div>
        </form>
        <div className="modalFooter">
          <button type="submit" form="registerForm">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
