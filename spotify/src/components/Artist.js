import artistsData from '../JsonFiles/artists.json';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import songsData from '../JsonFiles/songs.json';
import albumsData from '../JsonFiles/albums.json';
import NotExist from './NotExist';
import GetById from './GetById';

function Artist(props) {
  const [exists, setExists] = useState(false);
  const [selectedSongs, setSelectedSongs] = useState([]);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const myArtist = <GetById id={props.match.params.id} type="artists" />;
    // const myArtist = artistsData.find(
    //   (item) => item.id === Number(props.match.params.id)
    // );
    if (myArtist !== undefined) {
      setExists(myArtist);
      console.log(myArtist);
      setSelectedSongs(myArtist.selectedSong);
      setAlbums(myArtist.albumsList);
    }
  }, []);
  if (exists === false) {
    return <NotExist />;
  } else {
    return (
      <div>
        <div>{exists.name}</div>
        <ol>
          <h2>Albums</h2>
          {albums.map((album) => {
            console.log(albums);
            const myAlbum = albumsData.find((item) => item.albumName === album);
            console.log(myAlbum);
            console.log(selectedSongs);
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
          <h2>songs</h2>
          {selectedSongs.map((song) => {
            const mySong = songsData.find((item) => item.songName === song);
            console.log(mySong);
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
      </div>
    );
  }
}
export default Artist;
