import React from "react";
import Minividcomp from "./minividcomp";
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

const Playlistscreen  = ({playlists, Thekey}) =>{
 
    return (
        <div className="playlistscreen" >
        <Minividcomp playlist = {playlists} />
        </div>

    )
}

export default Playlistscreen