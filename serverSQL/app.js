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
// app.get('/songs/:id', (req, res) => {
//   mysqlCon.query('SELECT * FROM songs WHERE id = ? AND Plays > ?', [req.params.id, 100], (err, results, fields) => {
//       console.log(fields);
//       if(err){
//           res.send(err.message);
//       } else if (results && results.length === 1){
//           res.send(results[0]);
//       } else {
//           res.send(results);
//       }
//   });
// });

app.listen(3001);
