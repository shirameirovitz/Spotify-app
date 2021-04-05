import { useEffect, useState } from "react";
import albumsData from "../JsonFiles/albums.json";
import { Link } from "react-router-dom";
import songsData from "../JsonFiles/songs.json";

function Album(props) {
  const [exists, setExists] = useState(true);
  const [songsList, setSongList] = useState([]);

  useEffect(() => {
    const myAlbum = albumsData.find(
      (item) => item.id === Number(props.match.params.id)
    );
    setExists(myAlbum);
    setSongList(myAlbum.songsList);
  }, []);
  {
    console.log(songsList);
  }

  return (
    <div>
      <h1>Album</h1>
      <div>{exists.albumName}</div>
      <div>Artist:{exists.artistName}</div>
      <ol>
        <h2>songs</h2>
        {songsList.map((song, i) => {
          const mySong = songsData.find((item) => item.songName === song);
          return (
            <Link to={`/song/${mySong.id}?album=${exists.id}`}>
              <li key={i}>{song}</li>
            </Link>
          );
        })}
      </ol>
      <img src={`..${exists.cover_img}`} alt={exists.albumName}></img>
    </div>
  );
}

export default Album;
