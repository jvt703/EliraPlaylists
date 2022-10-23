import React from "react";


const YoutubeEmbed = ({ embedId, VideoName}) => {
  console.log(VideoName,"embed")
  return(<div className="video-responsive">
    <iframe
        className="thevideo"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>)
};

export default YoutubeEmbed;