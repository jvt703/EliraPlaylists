import react from "react";
import Minividcomp from "./minividcomp";
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import Playlistscreen from "./playlistscreen";
const Playlistcomp = ({ playlists, updateVideoName, VideoName}) => {
  

  return (
    <div className="Playlists" >
      {Object.keys(playlists).map((key, index) => {
        return (<div className="PlaylistContainer" key={index}>
        <h3 className="Playlisttitle">{key}</h3>
        <Playlistscreen playlist={playlists[key]} VideoName={VideoName} updateVideoName={updateVideoName}/>
        </div>) 
      })}
    </div>
  );
};

export default Playlistcomp;
