import react from "react";
import Minividcomp from "./minividcomp";
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
const Playlistcomp = ({ playlists }) => {
  const ref = useRef();
  const { events } = useDraggable(ref);
  
  return (
    <div className="Playlists" {...events} ref={ref}>
      {Object.keys(playlists).map((key, index) => {
        return <Minividcomp playlists={playlists} Thekey={key} />;
      })}
    </div>
  );
};

export default Playlistcomp;
