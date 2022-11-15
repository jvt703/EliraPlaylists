import React from "react";


const RegisterModal = ({updateOpenModal}) =>{

    return <div className="modalBackground">
        <div className="modalContainer">
           <div className="modalClosebutton">
            <button onClick={()=>{updateOpenModal(false)}}> X </button>
            </div> 
            <div className="modalTitle">
                <h1>Register a new account</h1>
            </div>
            <div className="modalBody">
                <input></input>
                <label>Username</label>
                <input></input>
                <label>Password</label>

            </div>
            <div className="ModalFooter">
                <button onClick={()=>{updateOpenModal(false)}}>Cancel</button>
                <button>Submit</button>
            </div>
        </div>
       </div>





}

export default RegisterModal