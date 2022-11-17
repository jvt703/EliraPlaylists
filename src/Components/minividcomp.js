import react, { useEffect } from "react";
import { Fragment } from "react/cjs/react.production.min";
import { BrowserRouter as Router, Link, useMatch } from "react-router-dom";
import { Button } from "antd";
let Minividcomp = ({ playlist, Thekey, updateVideoName, VideoName, Token, setPlaylistnode}) => {
  const clickHandler = (e, items) => {
    updateVideoName(items);
  };
  const location = useMatch("/playlists");
  const addtoplaylisthandler = async (items) => {
    let videoObject = {
      videoid: items.videoid,
      playlistid: "Favorites",
      videoname: items.videoname,
      videourl: items.videourl,
      position: 0,
    };
    const response = await fetch(
      `http://localhost:3001/app/playlists/playlistadd`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Token}`,
        },
        body: JSON.stringify(videoObject),
      }
    );

  };

  const removeFromPlaylistHandler = async(items, index) => {
    //remember to update the playlists using setplaylist and remove the index
  
    let videoObject = {
      id: items.id,
      videoid: items.videoid,
      playlistid: items.playlistid,
      videoname: items.videoname,
      videourl: items.videourl,
      position: items.position,
    }
    const response = await fetch(
      `http://localhost:3001/app/playlists/playlistdelete`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Token}`,
        },
        body: JSON.stringify(videoObject),
      }
    );
    let result = await response.json()
    let updatedplaylist = playlist.splice(index,1)
    setPlaylistnode(updatedplaylist)
  };

  return (
    <div className="minivid">
      {playlist.map((items, index) => {
        return (
          <div
            style={{
              color: "#000",
            }}
            className="OuterVideoDescription"
            key={index}
          >
            {location ? (
              <div className="buttonContainer">
                <Button
                  className="addButton"
                  onClick={() => {
                    removeFromPlaylistHandler(items, index);
                  }}
                >
                  X
                </Button>
              </div>
            ) : (
              <div className="buttonContainer">
                <Button
                  className="addButton"
                  onClick={() => {
                    addtoplaylisthandler(items);
                  }}
                >
                  Add
                </Button>
                <Button className="favoriteButton">Favorite</Button>
              </div>
            )}

            <Link
              onClick={(event) => clickHandler(event, items.snippet.title)}
              to={`/watch/${items.videoid}`}
            >
              <img src={items.videourl}></img>
            </Link>
            <div>{items.videoname}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Minividcomp;
