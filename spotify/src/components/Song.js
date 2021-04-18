import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import songsData from '../JsonFiles/songs.json';
// import albumsData from '../JsonFiles/albums.json';
// import artistsData from '../JsonFiles/artists.json';
// import playlistsData from '../JsonFiles/playlists.json';
import NotExist from './NotExist';
import GetById from './GetById';

function Song(props) {
  const [exists, setExists] = useState(false);
  const [suggestedSongs, setSuggestedSongs] = useState([]);
  const queryParams = useQuery();

  useEffect(() => {
    const mySong = <GetById id={props.match.params.id} type="songs" />;
    // const mySong = songsData.find(
    //   (item) => item.id === Number(props.match.params.id)
    // );
    if (mySong !== undefined) {
      setExists(mySong);
      if (props.location.search !== '') {
        const myAlbum = <GetById id={props.match.params.id} type="albums" />;
        // const myAlbum = albumsData.find(
        //   (item) => item.id === Number(queryParams.album)
        // );
        const myPlaylist = (
          <GetById id={props.match.params.id} type="playlists" />
        );
        // const myPlaylist = playlistsData.find(
        //   (item) => item.id === Number(queryParams.playlist)
        // );

        const myArtist = <GetById id={props.match.params.id} type="artists" />;
        // const myArtist = artistsData.find(
        //   (item) => item.id === Number(queryParams.artist)
        // );

        //match suggested songs by album/artist/playlist
        if (queryParams.album) {
          setSuggestedSongs(myAlbum.songsList);
        } else if (queryParams.artist) {
          setSuggestedSongs(myArtist.selectedSong);
        } else {
          setSuggestedSongs(myPlaylist.songsList);
        }
      }
    }
  }, []);

  if (exists === false) {
    return <NotExist />;
  } else {
    return (
      <div>
        <h1>Song</h1>
        <div> views: {exists.views}</div>
        <div>{exists.artistName}</div>
        <div>{exists.length}</div>
        <div>{exists.songName}</div>
        <div>{exists.lyrics}</div>
        <iframe
          width="560"
          height="315"
          src={exists.src}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <h2>suggestedSongs</h2>

        {suggestedSongs.map((song, i) => {
          const otherSong = songsData.find((item) => item.songName === song);
          console.log(otherSong.id);

          return (
            /////////////////////////
            //problem - switch url but not the page himself without refresh
            //the problem is with the key
            <Link
              to={{
                pathname: `/song/${otherSong.id}`,
              }}
            >
              <li key={otherSong.id}>{song}</li>
            </Link>
          );
        })}
      </div>
    );
  }
}
function useQuery() {
  const queryParams = new URLSearchParams(useLocation().search);
  const artist = queryParams.get('artist');
  const album = queryParams.get('album');
  const playlist = queryParams.get('playlist');
  return { artist, album, playlist };
}
export default Song;
