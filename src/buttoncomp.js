import React from "react";
import { Button } from "antd";


const Buttoncomp = ()=>{
    const log =(e)=>{
        e.preventDefault()
        console.log("this clicks")
     
    }


    return <Button id='Header_Logo' type='ghost' size='large' onClick={log} >HoloStreams</Button>
  
    
   
}

export default Buttoncomp;