import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import  ReactDOM  from 'react-dom';
import Buttoncomp from './buttoncomp';
import Toolbar from './Toolbar';
import {Layout, Menu, Breadcrumb} from 'antd'
import 'antd/dist/antd.css';
import './styles/styles.css'
const items = [
  {
    label: 'Navigation One',
    key: 'mail'
  }
 
];

const App =()=> {
  const list = ['korone_forever','Gura_Cute']
    // return <div>
    //     Hello world? 
    //     {list ? list.map((item)=>{
    //         console.log(item)
    //         return <Buttoncomp item={item}/>
    //     }):null
    // }
    return (
        <Router>
            
            <Routes>
            <Route path="/" 
            element={ <Toolbar/>}
            //element=
            // { list ? list.map((item)=>{
            // return  <Buttoncomp item={item}/>}):null}
            
            >
                
            </Route>
            <Route path='/watch/:videoId' element={ <Toolbar/>}>

            </Route>
            </Routes>

        </Router>)
        

 
}



ReactDOM.render(<App/>, document.getElementById('app'))