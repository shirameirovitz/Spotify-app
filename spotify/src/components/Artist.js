import artistsData from "../JsonFiles/artists.json";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import songsData from "../JsonFiles/songs.json";
import albumsData from "../JsonFiles/albums.json";
import NotExist from "./NotExist";

function Artist(props) {
  const [exists, setExists] = useState(true);
  const [songSelected, setSongSelected] = useState([]);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const myArtist = artistsData.find(
      (item) => item.id === Number(props.match.params.id)
    );
    if (myArtist !== undefined) {
      setExists(myArtist);
      console.log(myArtist);
      setSongSelected(myArtist.selectedSong);
      setAlbums(myArtist.albumsList);
    }
  }, []);
  if (exists === false) {
    return <NotExist />;
  } else {
    return (
      <div>
        <h1>Artist</h1>
        <div>{exists.name}</div>

        <ol>
          <h2>Albums</h2>
          {albums.map((album, i) => {
            const myAlbum = albumsData.find((item) => item.albumName === album);
            console.log(myAlbum);
            return (
              <Link
                to={{
                  pathname: `/album/${myAlbum.id}`,
                  search: `?artist=${exists.id}`,
                }}
              >
                <li key={myAlbum.id}>{album}</li>
              </Link>
            );
          })}
        </ol>
        <ol>
          <h2>Selected songs</h2>
          {songSelected.map((song, i) => {
            const mySong = songsData.find((item) => item.songName === song);
            return (
              <Link
                to={{
                  pathname: `/song/${mySong.id}`,
                  search: `?artist=${exists.id}`,
                }}
              >
                <li key={mySong.id}>{song}</li>
              </Link>
            );
          })}
        </ol>

        <img src={`..${exists.cover_img}`} alt={exists.name}></img>
        <ul>{songSelected}</ul>
      </div>
    );
  }
}
export default Artist;
