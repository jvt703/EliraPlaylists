import React from "react";
import Minividcomp from "./minividcomp";
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

const Playlistscreen  = ({playlist, Thekey}) =>{
 console.log(playlist, 'playlist arr')
    return (
        <div className="playlistscreen" >
        <Minividcomp playlist = {playlist} />
        </div>

    )
}

export default Playlistscreen