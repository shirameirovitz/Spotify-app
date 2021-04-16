import React from 'react';

import { Link, useLocation } from 'react-router-dom';

function SongList({ song }) {
  const path = useLocation().pathname.split('/');
  const origin = path[1];
  const originId = origin === 'song' ? null : path[2];

  return (
    <Link to={`/song/${song.id}?${origin}=${originId}`}>
      <img src={`http://img.youtube.com/vi/${song.id}/0.jpg`} alt="" />
      <div className="nameArt">
        <span className="name">{song.name}</span>
        <span className="artist">{song.artist}</span>
      </div>
      <span className="length">{song.length}</span>
    </Link>
  );
}

export default SongList;
