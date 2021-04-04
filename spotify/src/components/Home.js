import { React, useEffect, useState } from "react";
import albumsData from "../JsonFiles/albums.json";
import artistsData from "../JsonFiles/artists.json";
import playlistsData from "../JsonFiles/playlists.json";
import songsData from "../JsonFiles/songs.json";
import PlayList from "./PlayList.js";
import Artist from "./Artist.js";
import Song from "./Song.js";
import Album from "./Album.js";

function Home() {
  useEffect(() => {});

  return (
    <div>
      <h1>Home</h1>
      <ul>
        <h2>Top 5 songs</h2>
        <Song />
      </ul>
      <ul>
        <h2>Top 5 artists</h2>
        <Artist />
      </ul>
      <ul>
        <h2>Top 5 albums</h2>
        <Album />
      </ul>
      <ul>
        <h2>Top 5 playlists</h2>
        <PlayList />
      </ul>
    </div>
  );
}
export default Home;
