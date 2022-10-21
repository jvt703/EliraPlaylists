import react from "react";
import { Fragment } from "react/cjs/react.production.min";

let Minividcomp = ({ playlists, Thekey }) => {
  console.log(playlists, Thekey, "minivid");
  return (
    <div className="playlistscreen">
      {`playlist name = ${Thekey}`}
      <div className="minivid">
        {playlists[Thekey].map((items) => {
          return (
            <div
              style={{
                color: "#fff9",
              }}
              className="OuterVideoDescription"
              key={items.id.videoId}
            >
              <div>{items.snippet.title}</div>
              <a href={`/watch/${items.id.videoId}`}>
                <img src={items.snippet.thumbnails.medium.url}></img>
              </a>
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
