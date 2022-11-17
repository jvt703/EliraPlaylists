import { React, useRef, useState } from "react";



const LoginModal = ({
  setOpenLoginModal,
  setMyUsername,
  setUserId,
  setUserToken,
  setMyEmail,
})=>{
const modalRef = useRef();
const [LoginObjdata, setLoginObjdata] = useState({})

const getInputs = (value, name) => {
    let data = { [name]: value };
    setLoginObjdata({ ...LoginObjdata, ...data });
  };


const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setOpenLoginModal(false);
    }
  };
const loginHandler = async(e) =>{
    e.preventDefault()
  

    try{
        let response = await fetch(`http://localhost:3001/app/users/login`, 
         {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(LoginObjdata),
          }
        )

        let data = await response.json()

        if (data.user) {
          const token =  data.token;
          const userId =  data.user.id;
          const myUsername =  data.user.username;
          const email =  data.user.email;
          setUserToken(token);
          setMyUsername(myUsername);
          setUserId(userId);
          setMyEmail(email);
          localStorage.setItem("userToken", token);
          localStorage.setItem("myUsername", JSON.stringify(myUsername));
          localStorage.setItem("userId", userId);
          localStorage.setItem("email", email);
        }


    }
    catch{}
setOpenLoginModal(false)

}



    return (
    <div className="modalBackground" ref={modalRef} onClick={closeModal}>
      <div className="modalContainer">
        <div className="modalClosebutton">
          <button
            onClick={() => {
              setOpenLoginModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="modalTitle">
          <h1>Sign In</h1>
        </div>
        <form onSubmit={loginHandler} id="loginForm">
          <div className="modalBody">
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
          <button type="submit" form="loginForm">
            Submit
          </button>
        </div>
      </div>
    </div>
  );

}

export default LoginModal