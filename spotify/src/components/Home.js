import { React, useEffect, useState } from "react";

import albums from "../JsonFiles/albums.json";
import artists from "../JsonFiles/artists.json";
import playlists from "../JsonFiles/playlists.json";
import songs from "../JsonFiles/songs.json";
import Items from "./Items";

// import PlayList from "./PlayList.js";
// import Artist from "./Artist.js";
// import Song from "./Song.js";
// import Album from "./Album.js";

function Home() {
  const [topSongs, setTopSongs] = useState([]);

  // useEffect(() => {
  //   console.log(songsData);
  //   setTopSongs(songsData.sort((a, b) => b.views - a.views).slice(0, 5));
  // }, []);
  // console.log(topSongs);
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <h2>Top 5 songs</h2>
        <Items items={songs} title="top songs" type="song" />;
      </ul>
      <ul>
        <h2>Top 5 artists</h2>
        <Items items={artists} title="top artists" type="artist" />;
      </ul>
      <ul>
        <h2>Top 5 albums</h2>
        <Items items={albums} title="top albums" type="album" />;
      </ul>
      <ul>
        <h2>Top 5 playlists</h2>
        <Items items={playlists} title="top playlists" type="playlist" />;
      </ul>
    </div>
  );
}
export default Home;
