import react from "react";
import { Fragment } from "react/cjs/react.production.min";

let Minividcomp = ({ playlist, Thekey }) => {
    console.log('mini', playlist)
  return (
    <div className="playlistscreen">
    
      <div className="minivid">
        {playlist.map((items) => {
          return (
            <div
              style={{
                color: "#fff9",
              }}
              className="OuterVideoDescription"
              key={items.id.videoId}
            >
              
              <a href={`/watch/${items.id.videoId}`}>
                <img src={items.snippet.thumbnails.medium.url}></img>
              </a>
              <div>{items.snippet.title}</div>
              {/* <YoutubeEmbed className='contents' embedId={videoId}/> */}
            </div>
          );
        })}
        ;
      </div>
    </div>
  );
};

export default Minividcomp;
