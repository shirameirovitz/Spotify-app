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

app.get('/songs', (req, res) => {
  mysqlCon.query('SELECT * FROM songs;', (err, results, fields) => {
    if (err) {
      res.send(err.message);
    }
    res.send(results);
  });
});
