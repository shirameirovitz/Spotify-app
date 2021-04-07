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
    if (myAlbum !== undefined) {
      setExists(myAlbum);
      setSongList(myAlbum.songsList);
    }
  }, []);
  if (exists === false) {
    return <NotExist />;
  } else {
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
              <Link
                to={{
                  pathname: `/song/${mySong.id}`,
                  search: `?album=${exists.id}`,
                }}
              >
                <li key={mySong.id}>{song}</li>
              </Link>
            );
          })}
        </ol>
        <img src={`..${exists.cover_img}`} alt={exists.albumName}></img>
      </div>
    );
  }
}

export default Album;
