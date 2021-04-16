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
  if (
    body.id &&
    body.songName &&
    body.artistName &&
    body.album &&
    body.length &&
    body.views &&
    body.src &&
    body.lyrics
  ) {
    mysqlCon.query(
      `INSERT INTO songs VALUES (${body.id}, "${body.songName}", "${body.artistName}", "${body.album}", "${body.length}", ${body.views}, "${body.src}", "${body.lyrics}")`,
      (err, results, fields) => {
        if (err) {
          res.send(err.message);
        } else {
          res.send('Add successfully');
        }
      }
    );
  } else {
    res.send('You missed a value');
  }
});
//POST NEW ARTIST
app.post('/artist', (req, res) => {
  let body = req.body;
  if (
    body.id &&
    body.name &&
    body.cover_img &&
    body.albumsList &&
    body.selectedSong
  ) {
    mysqlCon.query(
      `INSERT INTO artists VALUES (${body.id}, "${body.name}", "${body.cover_img}", "${body.albumsList}", "${body.selectedSong}")`,
      (err, results, fields) => {
        if (err) {
          res.send(err.message);
        } else {
          res.send('Add successfully');
        }
      }
    );
  } else {
    res.send('You missed a value');
  }
});
//POST NEW ALBUM
app.post('/album', (req, res) => {
  let body = req.body;
  if (
    body.id &&
    body.artistName &&
    body.albumsName &&
    body.cover_img &&
    body.songsList
  ) {
    mysqlCon.query(
      `INSERT INTO albums VALUES (${body.id}, "${body.artistName}", "${body.albumsName}", "${body.cover_img}", "${body.songsList}")`,
      (err, results, fields) => {
        if (err) {
          res.send(err.message);
        } else {
          res.send('Add successfully');
        }
      }
    );
  } else {
    res.send('You missed a value');
  }
});
//POST NEW PLAYLIST
app.post('/playlist', (req, res) => {
  let body = req.body;
  if (
    body.id &&
    body.name &&
    body.cover_img &&
    body.createdAt &&
    body.songsList
  ) {
    mysqlCon.query(
      `INSERT INTO playlists VALUES (${body.id}, "${body.name}", "${body.cover_img}", "${body.createdAt}", "${body.songsList}")`,
      (err, results, fields) => {
        if (err) {
          res.send(err.message);
        } else {
          res.send('Add successfully');
        }
      }
    );
  } else {
    res.send('You missed a value');
  }
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

app.listen(3001);
