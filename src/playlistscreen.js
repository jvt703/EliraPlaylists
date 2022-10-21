import React from "react";
import Minividcomp from "./minividcomp";
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

const Playlistscreen  = ({playlist}) =>{
   const ref = useRef();
  const { events } = useDraggable(ref);
    return (
        <div className="Playlistscreen" {...events} ref={ref}>
        <Minividcomp playlist = {playlist} />
        </div>

    )
}

export default Playlistscreen