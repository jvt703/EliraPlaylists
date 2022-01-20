import React from "react";

const Buttoncomp = ({item})=>{
    const log =(e)=>{
        e.preventDefault()
        console.log("this clicks")
    }
    console.log(item,'here????')
    return <div>
      <h2>{item}</h2>
      <video id="videoPlayer" width="650" controls  >
        <source src={`http://localhost:8000/video/${item}`} type="video/mp4"/>
    </video>
  
    </div>
   
}

export default Buttoncomp;