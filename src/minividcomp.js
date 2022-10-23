import react, { useEffect } from "react";
import { Fragment } from "react/cjs/react.production.min";
import {BrowserRouter as Router, Link} from 'react-router-dom'
let Minividcomp = ({ playlist, Thekey, updateVideoName, VideoName }) => {
    const clickHandler = (e, items) => {
       
        updateVideoName(items)
    }
    console.log(playlist,">>>>>>>>>")
  return (
  
    
      <div className="minivid" >
        {playlist.map((items, index) => {

          return (
            <div
              style={{
                color: "#fff9",
              }}
              className="OuterVideoDescription"
              key={index}
            >
              <Link onClick={event=> clickHandler(event,items.snippet.title)} to={`/watch/${items.snippet.resourceId.videoId}`}>
                <img src={items.snippet.thumbnails.medium.url}></img>
              </Link>
              <div>{items.snippet.title}</div>
              {/* <YoutubeEmbed className='contents' embedId={videoId}/> */}
            </div>
          );
        })}
        ;
      </div>
  );
};

export default Minividcomp;
