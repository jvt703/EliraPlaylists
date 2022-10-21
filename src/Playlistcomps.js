import react from "react";
import Minividcomp from "./minividcomp";
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import Playlistscreen from "./playlistscreen";
const Playlistcomp = ({ playlists }) => {
  

  return (
    <div className="Playlists" >
      {Object.keys(playlists).map((key, index) => {
        // return <Minividcomp playlists={playlists} Thekey={key} />;
        return (<>
        <h3 className="Playlisttitle">Playlist: {key}</h3>
        <Playlistscreen playlist={playlists[key]}/>
        </>) 
      })}
    </div>
  );
};

export default Playlistcomp;
