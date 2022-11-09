import react, { useEffect } from "react";
import { Fragment } from "react/cjs/react.production.min";
import {BrowserRouter as Router, Link} from 'react-router-dom'
let Minividcomp = ({ playlist, Thekey, updateVideoName, VideoName }) => {
    const clickHandler = (e, items) => {
       
        updateVideoName(items)
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
              <Link onClick={event=> clickHandler(event,items.snippet.title)} to={`/watch/${items.PlaylistId}`}>
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
