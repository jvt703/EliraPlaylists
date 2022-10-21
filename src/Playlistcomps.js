import react from "react";
import Minividcomp from "./minividcomp";
const Playlistcomp = ({ playlists }) => {
    return (
        <div className="Playlists">
            {Object.keys(playlists).map((key, index) => {
                return (
                    <Minividcomp playlists={playlists} Thekey={key} />
                );
            })}
        </div>
    );
};


export default Playlistcomp