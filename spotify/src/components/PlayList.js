import { useEffect, useState } from 'react';
import playlistData from '../JsonFiles/playlists.json';
import { Link } from 'react-router-dom';
import songsData from '../JsonFiles/songs.json';
import NotExist from './NotExist';
import GetById from './GetById';
const axios = require('axios');

function PlayList(props) {
  const [exists, setExists] = useState(false);
  const [songsList, setSongList] = useState([]);
  const [myPlaylist, setMyPlaylist] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/playlists/${props.match.params.id}`)
      .then((response) => {
        setExists(response.data);
        console.log(response.data);
        setMyPlaylist(response.data);
        console.log(myPlaylist);
        setSongList(myPlaylist.songsList);
      })
      .catch((err) => {
        return err;
      });

    // const myPlaylist = playlistData.find(
    //   (item) => item.id === Number(props.match.params.id)
    // );
  }, []);
  if (exists === false) {
    return <NotExist />;
  } else {
    return (
      <div>
        <h2>{exists.name}</h2>
        <div>{exists.createdAt}</div>
        {console.log(songsList)}
        <ol>
          <h3>songs</h3>
          {songsList.map((song, i) => {
            const mySong = songsData.find((item) => item.songName === song);
            console.log(mySong);
            return (
              <Link
                to={{
                  pathname: `/song/${mySong.id}`,
                  search: `?playlist=${exists.id}`,
                }}
              >
                <li key={mySong.id}>{song}</li>
              </Link>
            );
          })}
        </ol>
        <img
          src={`..${exists.cover_img}`}
          alt={exists.albumName}
          style={{ width: '100px' }}
        ></img>
      </div>
    );
  }
}
export default PlayList;
