const express = require('express');
const mysql = require('mysql');
const app = express();
app.use(express.json());

let mysqlCon = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'shira1999',
  database: 'spotify',
  multipleStatements: true,
});

mysqlCon.connect((err) => {
  if (err) throw err;
  console.log('connected!');
});
//GET 5 TOP SONGS
app.get('/songs', (req, res) => {
  mysqlCon.query(
    'SELECT * FROM songs ORDER BY views DESC LIMIT 5',
    (err, results, fields) => {
      if (err) {
        res.send(err.message);
      }
      res.send(results);
    }
  );
});
//GET 5 TOP ARTISTS
app.get('/artists', (req, res) => {
  mysqlCon.query(
    'SELECT * FROM artists ORDER BY RAND() LIMIT 5',
    (err, results, fields) => {
      if (err) {
        res.send(err.message);
      }
      res.send(results);
    }
  );
});
//GET 5 TOP ALBUMS
app.get('/albums', (req, res) => {
  mysqlCon.query(
    'SELECT * FROM albums ORDER BY RAND() LIMIT 5',
    (err, results, fields) => {
      if (err) {
        res.send(err.message);
      }
      res.send(results);
    }
  );
});
//GET 5 TOP PLAYLISTS
app.get('/playlists', (req, res) => {
  mysqlCon.query(
    'SELECT * FROM playlists ORDER BY RAND() LIMIT 5',
    (err, results, fields) => {
      if (err) {
        res.send(err.message);
      }
      res.send(results);
    }
  );
});
//GET SONG BY ID
app.get('/songs/:id', (req, res) => {
  let queryString = 'SELECT * FROM songs WHERE id = ' + req.params.id;
  mysqlCon.query(queryString, (err, results, fields) => {
    if (err) {
      res.send(err.message);
    } else if (results && results.length === 1) {
      res.send(results[0]);
    }
  });
});
//GET ARTIST BY ID
app.get('/artists/:id', (req, res) => {
  let queryString = 'SELECT * FROM artists WHERE id = ' + req.params.id;
  mysqlCon.query(queryString, (err, results, fields) => {
    if (err) {
      res.send(err.message);
    } else if (results && results.length === 1) {
      res.send(results[0]);
    }
  });
});
//GET ALBUM BY ID
app.get('/albums/:id', (req, res) => {
  let queryString = 'SELECT * FROM albums WHERE id = ' + req.params.id;
  mysqlCon.query(queryString, (err, results, fields) => {
    if (err) {
      res.send(err.message);
    } else if (results && results.length === 1) {
      res.send(results[0]);
    }
  });
});
//GET PLAYLIST BY ID
app.get('/playlists/:id', (req, res) => {
  let queryString = 'SELECT * FROM playlists WHERE id = ' + req.params.id;
  mysqlCon.query(queryString, (err, results, fields) => {
    if (err) {
      res.send(err.message);
    } else if (results && results.length === 1) {
      res.send(results[0]);
    }
  });
});
//POST NEW SONG
app.post('/song', (req, res) => {
  let body = req.body;
  mysqlCon.query('INSERT INTO songs SET ?', body, (err, results, fields) => {
    console.log(fields);
    if (err) {
      res.send(err.message);
    } else {
      res.send(results);
    }
  });
});

//POST NEW ARTIST
app.post('/artist', (req, res) => {
  let body = req.body;
  mysqlCon.query('INSERT INTO artists SET ?', body, (err, results, fields) => {
    console.log(fields);
    if (err) {
      res.send(err.message);
    } else {
      res.send(results);
    }
  });
});
//POST NEW ALBUM
app.post('/album', (req, res) => {
  let body = req.body;
  mysqlCon.query('INSERT INTO albums SET ?', body, (err, results, fields) => {
    console.log(fields);
    if (err) {
      res.send(err.message);
    } else {
      res.send(results);
    }
  });
});
//POST NEW PLAYLIST
app.post('/playlist', (req, res) => {
  let body = req.body;
  mysqlCon.query(
    'INSERT INTO playlists SET ?',
    body,
    (err, results, fields) => {
      console.log(fields);
      if (err) {
        res.send(err.message);
      } else {
        res.send(results);
      }
    }
  );
});
//change existing song
app.put('/song', (req, res) => {
  mysqlCon.query(
    'UPDATE songs SET songName = ?, artistName = ?, album = ?, length = ?, views = ?, src = ?, lyrics = ? WHERE id = ?',
    [
      req.body.songName,
      req.body.artistName,
      req.body.album,
      req.body.length,
      req.body.views,
      req.body.src,
      req.body.lyrics,
      req.body.id,
    ],
    (err, results, fields) => {
      if (err) {
        res.send(err.message);
      } else {
        res.send('Updated successfully');
      }
    }
  );
});
//change existing artist
app.put('/song', (req, res) => {
  mysqlCon.query(
    'UPDATE artists SET name = ?, cover_img = ?, albumsList = ?, selectedSong = ? WHERE id = ?',
    [
      req.body.name,
      req.body.cover_img,
      req.body.albumsList,
      req.body.selectedSong,
      req.body.id,
    ],
    (err, results, fields) => {
      if (err) {
        res.send(err.message);
      } else {
        res.send('Updated successfully');
      }
    }
  );
});
//change existing album
app.put('/album', (req, res) => {
  mysqlCon.query(
    'UPDATE albums SET artistName = ?, albumName = ?, cover_img = ?, songsList = ? WHERE id = ?',
    [
      req.body.artistName,
      req.body.albumName,
      req.body.cover_img,
      req.body.songsList,
      req.body.id,
    ],
    (err, results, fields) => {
      if (err) {
        res.send(err.message);
      } else {
        res.send('Updated successfully');
      }
    }
  );
});
//change existing playlist
app.put('/playlist', (req, res) => {
  mysqlCon.query(
    'UPDATE playlists SET name = ?, cover_img = ?,createdAt = ?, songsList = ? WHERE id = ?',
    [
      req.body.name,
      req.body.cover_img,
      req.body.songsList,
      req.body.createdAt,
      req.body.id,
    ],
    (err, results, fields) => {
      if (err) {
        res.send(err.message);
      } else {
        res.send('Updated successfully');
      }
    }
  );
});
//DELETE EXISTING SONG
app.delete('/song/:id', (req, res) => {
  mysqlCon.query(
    'DELETE FROM songs WHERE id = ?',
    [req.params.id],
    (err, results, fields) => {
      console.log(fields);
      if (err) {
        res.send(err.message);
      } else {
        res.send(results);
      }
    }
  );
});
//DELETE EXISTING ARTIST
app.delete('/artist/:id', (req, res) => {
  mysqlCon.query(
    'DELETE FROM artists WHERE id = ?',
    [req.params.id],
    (err, results, fields) => {
      console.log(fields);
      if (err) {
        res.send(err.message);
      } else {
        res.send(results);
      }
    }
  );
});
//DELETE EXISTING ALBUM
app.delete('/album/:id', (req, res) => {
  mysqlCon.query(
    'DELETE FROM albums WHERE id = ?',
    [req.params.id],
    (err, results, fields) => {
      console.log(fields);
      if (err) {
        res.send(err.message);
      } else {
        res.send(results);
      }
    }
  );
});
//DELETE EXISTING PLAYLIST
app.delete('/playlist/:id', (req, res) => {
  mysqlCon.query(
    'DELETE FROM playlists WHERE id = ?',
    [req.params.id],
    (err, results, fields) => {
      console.log(fields);
      if (err) {
        res.send(err.message);
      } else {
        res.send(results);
      }
    }
  );
});
app.listen(3001);
