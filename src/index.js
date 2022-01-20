import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import  ReactDOM  from 'react-dom';
import Buttoncomp from './buttoncomp';

const App =()=> {
    const list = ['korone_forever','Gura_Cute']
    // return <div>
    //     Hello world? 
    //     {list ? list.map((item)=>{
    //         console.log(item)
    //         return <Buttoncomp item={item}/>
    //     }):null
    // }
    return(
        <Router>
            <Routes>
            <Route path="/" element={ list ? list.map((item)=>{
            return <Buttoncomp item={item}/>}):null}>
            </Route>
            
            </Routes>

        </Router>)
        

 
}



ReactDOM.render(<App/>, document.getElementById('app'))