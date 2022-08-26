import React, {useEffect, useState} from 'react';
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
  const [titles,updateTitles] = useState([])
  const [thumbnail,updateThumbnail] = useState([])
  const [items,updateItems] = useState([])
  const load =async()=>{
    let response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?order=date&part=snippet&type=video&channelId=UCoSrY_IQQVpmIRZ9Xf-y93g&key=${'AIzaSyAhsn7gVnEBFTW8_NaoHDmja3YmBex1vDA'}`)
        // .then(response=> response.json())
        // .then(data=>{
        //     updateItems(data.items)
        //     console.log(data)
        // })
       let data = await response.json()
       updateItems(data.items)
}
  useEffect(()=> load(),[])
    
    return (
        <Router>
            
            <Routes>
            <Route path="/" 
            element={ <Toolbar items={items}/>} 
            >
                
            </Route>
            <Route path='/watch/:videoId' element={ <Toolbar  items={items}/>}>

            </Route>
            </Routes>

        </Router>)
        
}



ReactDOM.render(<App/>, document.getElementById('app'))