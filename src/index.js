import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Link, Route, Routes, useLocation } from "react-router-dom";
import  ReactDOM  from 'react-dom';
import Buttoncomp from './Components/buttoncomp';
import Toolbar from './Components/Toolbar';
import RegisterModal from './Components/registerModal';
import 'antd/dist/antd.css';
import './styles/styles.css'
import axios from 'axios';
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
  
  const [items,updateItems] = useState([])
  const [playlists, updatePlaylists] = useState({})
  const [MyPlaylists, setMyPlaylists] = useState({"test":[]})
  const [VideoName, updateVideoName] = useState('TEST')
  const [Token, setUserToken] = useState('')
  const [MyUsername, setMyUsername] = useState('')
  const [UserId, setUserId] = useState('')
  const [MyEmail, setMyEmail] = useState('')


useEffect(()=>{
    setMyEmail(localStorage.getItem('email'))
    setMyUsername(localStorage.getItem('myUsername'))
    setUserId(localStorage.getItem('userId'))
    setUserToken(localStorage.getItem('userToken'))
   
  },[])
//   useEffect(()=> load()
//   ,[])
    
    return (
        <Router>
            
            <Routes>

              
            <Route path="/" 
            element={ <Toolbar 
             items={items}
             path ="home"
             playlists={playlists} 
             setUserToken ={setUserToken}
             setMyEmail ={setMyEmail}
             setMyUsername ={setMyUsername}
             setUserId ={setUserId}
             Token={Token}
             />} 
            >
                
            </Route>
            <Route path='/watch/:videoId' element={ <Toolbar
            path = "player"
            playlists={MyPlaylists} 
            setUserToken ={setUserToken}
             setMyEmail ={setMyEmail}
             setMyUsername ={setMyUsername}
             setUserId ={setUserId}
            Token={Token} />}>
            </Route>
            <Route path='/playlists' 
            element={ <Toolbar
            path = "playlist"
            playlists={MyPlaylists} 
            setUserToken ={setUserToken}
             setMyEmail ={setMyEmail}
             setMyUsername ={setMyUsername}
             setUserId ={setUserId}
            Token={Token} 
            />
            }
            
            >
            </Route>
            </Routes>

        </Router>)
        
}



ReactDOM.render(<App/>, document.getElementById('app'))