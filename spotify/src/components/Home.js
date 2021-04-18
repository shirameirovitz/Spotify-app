import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const axios = require('axios');

function Home() {
  const [topSongs, setTopSongs] = useState([]);
  const [topAlbums, setTopAlbums] = useState([]);
  const [topArtists, setTopArtists] = useState([]);
  const [topPlayLists, setTopPlayLists] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/songs`)
      .then((response) => {
        console.log(response);
        setTopSongs(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`http://localhost:3001/artists`)
      .then((response) => {
        console.log(response);
        setTopArtists(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`http://localhost:3001/playlists`)
      .then((response) => {
        console.log(response);
        setTopPlayLists(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`http://localhost:3001/albums`)
      .then((response) => {
        console.log(response);
        setTopAlbums(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>home</h1>
      <h3>Top 5 songs</h3>
      <ul>
        <ShowSongs songs={topSongs} />
      </ul>
      <h3>Top 5 playlists</h3>
      <ul>
        <ShowPlayLists playlists={topPlayLists} />
      </ul>
      <h3>Top 5 albums</h3>
      <ul>
        <ShowAlbums albums={topAlbums} />
      </ul>
      <h3>Top 5 artists</h3>
      <ul>
        <ShowArtists artists={topArtists} />
      </ul>
    </div>
  );
}

function ShowSongs({ songs }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(songs);
  }, [songs]);

  return items.map((song) => (
    <Link
      to={{
        pathname: `/song/${song.id}`,
      }}
    >
      <li key={song.id}>{song.songName}</li>
    </Link>
  ));
}

function ShowAlbums({ albums }) {
  // console.log(songs)
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(albums);
  }, [albums]);

  return items.map((album) => (
    <Link
      to={{
        pathname: `/album/${album.id}`,
      }}
    >
      <div key={album.id}>
        <li>{album.artistName}</li>
        <li>{album.albumName}</li>
        <img
          style={{ width: '100px' }}
          src={`..${album.cover_img}`}
          alt={album.albumName}
        />
      </div>
    </Link>
  ));
}
function ShowArtists({ artists }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(artists);
  }, [artists]);
  return items.map((artist) => (
    <Link
      to={{
        pathname: `/artist/${artist.id}`,
      }}
    >
      <div key={artist.id}>
        <li>{artist.name}</li>
        <img
          style={{ width: '100px' }}
          src={`..${artist.cover_img}`}
          alt={artist.name}
        />
        {/* <li>{artist.selectedSong}</li> */}
      </div>
    </Link>
  ));
}
function ShowPlayLists({ playlists }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(playlists);
  }, [playlists]);
  return items.map((playlist) => (
    <Link
      to={{
        pathname: `/playlist/${playlist.id}`,
      }}
    >
      <div key={playlist.id}>
        <li>{playlist.name}</li>
        <img
          style={{ width: '100px' }}
          src={`..${playlist.cover_img}`}
          alt={playlist.name}
        />
        {/* <li>{playlist.createdAt}</li>
        <li>{playlist.songsList}</li> */}
      </div>
    </Link>
  ));
}

export default Home;
