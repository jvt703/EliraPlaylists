import react, { useEffect } from "react";
import { Fragment } from "react/cjs/react.production.min";
import {BrowserRouter as Router, Link} from 'react-router-dom'
import { Button } from "antd";
let Minividcomp = ({ playlist, Thekey, updateVideoName, VideoName }) => {
    const clickHandler = (e, items) => {
       
        updateVideoName(items)
    }

    const addtoplaylisthandler = ()=>{

      
    }
  return (
  
    
      <div className="minivid" >
        {playlist.map((items, index) => {
         
          return (
            <div
              style={{
                color: "#000",
              }}
              className="OuterVideoDescription"
              key={index}
            >
              <Button className="addButton">add</Button>
              <Link onClick={event=> clickHandler(event,items.snippet.title)} to={`/watch/${items.videoid}`}>
                <img src={items.videourl}></img>
              </Link>
              <div>{items.videoname}</div>
          
            </div>
          )
        })}
      </div>
  );
};

export default Minividcomp;
