import { React, useRef, useState } from "react";

const RegisterModal = ({
  updateOpenModal,
  setMyUsername,
  setUserId,
  setUserToken,
  setMyEmail,
}) => {
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
    try {
      if (registerObjData.password.length < 8) {
        alert("Password Must Be At Least 8 Characters");
      } else {
        const response = await fetch(
          `http://localhost:3001/app/users/register`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(registerObjData),
          }
        );

        let data = await response.json();

        if (data.user) {
          const token = data.token;
          const userId =  data.user.id;
          const myUsername =  data.user.username;
          const email =  data.user.email;
          setUserToken(token);
          setMyUsername(myUsername);
          setUserId(userId);
          setMyEmail(email);
          localStorage.setItem("userToken", token);
          localStorage.setItem("myUsername", myUsername);
          localStorage.setItem("userId", userId);
          localStorage.setItem("email", email);
          updateOpenModal(false)
        } 
        else if(data.name=="UserExistsError"){
            alert(data.message)
        }
      }
    } catch {}
    
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
