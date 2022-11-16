import React from "react";
import Minividcomp from "./minividcomp";
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import { Button } from "antd";

const Playlistscreen  = ({playlist, updateVideoName, VideoName, Token}) =>{
   const ref = useRef();
  const { events } = useDraggable(ref);
    return (
        <div className="Playlistscreen" {...events} ref={ref}>
        <Minividcomp playlist = {playlist}  VideoName={VideoName} Token={Token} updateVideoName={updateVideoName} />
        </div>

    )
}

export default Playlistscreen