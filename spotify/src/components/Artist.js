import artistsData from "../JsonFiles/artists.json";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import songsData from "../JsonFiles/songs.json";

function Artist(props) {
  const [exists, setExists] = useState(true);
  const [songSelected, setSongSelected] = useState([]);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const myArtist = artistsData.find(
      (item) => item.id === Number(props.match.params.id)
    );
    setExists(myArtist);
    console.log(myArtist);
    setSongSelected(myArtist.selectedSong);
    setAlbums(myArtist.albumsList);
  }, []);
  return (
    <div>
      <h1>Artist</h1>
      <div>{exists.name}</div>

      <ol>
        <h2>Albums</h2>
        {albums.map((album, i) => {
          return <li key={i}>{album}</li>;
        })}
      </ol>
      <ol>
        <h2>Selected songs</h2>
        {songSelected.map((song, i) => {
          const mySong = songsData.find((item) => item.songName === song);
          return (
            <Link to={`/song/${mySong.id}?artist=${exists.id}`}>
              <li key={i}>{song}</li>
            </Link>
          );
        })}
      </ol>

      <img src={`..${exists.cover_img}`} alt={exists.name}></img>
      <ul>{songSelected}</ul>
    </div>
  );
}

export default Artist;
