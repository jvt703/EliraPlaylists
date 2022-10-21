import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import  ReactDOM  from 'react-dom';
import Buttoncomp from './buttoncomp';
import Toolbar from './Toolbar';
import 'antd/dist/antd.css';
import './styles/styles.css'
const items = [
  {
    label: 'Navigation One',
    key: 'mail'
  }
 
];
//UCIeSUTOTkF9Hs7q3SGcO-Ow
//`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails%2Cid&playlistId=PLcGP7PjybiCPpipQNJeuODyZoRerPv5Tk&key=${'AIzaSyAhsn7gVnEBFTW8_NaoHDmja3YmBex1vDA'}`
//let response = await fetch(`https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCIeSUTOTkF9Hs7q3SGcO-Ow&key=${'AIzaSyAhsn7gVnEBFTW8_NaoHDmja3YmBex1vDA'}`)
//PLcGP7PjybiCMrRcI67sr9YMCdpWHfJ0Mv,PLcGP7PjybiCPgoRECC0-T4rCGtLatqPGL,PLcGP7PjybiCMDFf4VH56uY-1s0HsTJN8s

//ok I gotta make a request for each of the playlists and put them together into one object response
const App =()=> {    
  const [titles,updateTitles] = useState([])
  const [thumbnail,updateThumbnail] = useState([])
  const [items,updateItems] = useState([])
  const [playlists, updatePlaylists] = useState({})

  const load =async()=>{
    let response = await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails%2Cid&playlistId=PLcGP7PjybiCPpipQNJeuODyZoRerPv5Tk&key=${'AIzaSyAhsn7gVnEBFTW8_NaoHDmja3YmBex1vDA'}`)
      
       let data = await response.json()
       console.log(data)
       let obj = {'PLcGP7PjybiCPpipQNJeuODyZoRerPv5Tk':data.items}
       updatePlaylists(obj)
       console.log(obj,">>>>>>")
       updateItems(data.items)
}
  useEffect(()=> load(),[])

  const compilePlaylists = () =>{
    
  }
    
    return (
        <Router>
            
            <Routes>
            <Route path="/" 
            element={ <Toolbar items={items} playlists={playlists}/>} 
            >
                
            </Route>
            <Route path='/watch/:videoId' element={ <Toolbar  items={items}/>}>

            </Route>
            </Routes>

        </Router>)
        
}



ReactDOM.render(<App/>, document.getElementById('app'))