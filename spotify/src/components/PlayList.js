import { useEffect, useState } from "react";
import playlistData from "../JsonFiles/playlists.json";

function PlayList(props) {
  const [exists, setExists] = useState(true);
  const [songsList, setSongList] = useState([]);

  useEffect(() => {
    const myPlaylist = playlistData.find(
      (item) => item.id === Number(props.match.params.id)
    );
    setExists(myPlaylist);
    setSongList(myPlaylist.songsList);
  }, []);
  return (
    <div>
      <h1>Playlist</h1>
      <div>{exists.name}</div>
      <div>{exists.created_at}</div>
      {console.log(songsList)}
      <ul>
        {" "}
        songs:
        {songsList.map((song, i) => {
          return <li key={i}>{song}</li>;
        })}
      </ul>
      <img src={`..${exists.cover_img}`} alt={exists.albumName}></img>
    </div>
  );
}

export default PlayList;
