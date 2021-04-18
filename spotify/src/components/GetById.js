const axios = require('axios');

function GetById({ id, type }) {
  if ((type = 'songs')) {
    axios
      .get(`http://localhost:3001/songs/:${id}`)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        return err;
      });
  }
  if ((type = 'artists')) {
    axios
      .get(`http://localhost:3001/artists/:${id}`)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        return err;
      });
//   }
//   if ((type = 'playlists')) {
//     axios
//       .get(`http://localhost:3001/playlists/:${id}`)
//       .then((response) => {
//         console.log(response.data);
//         return response.data;
//       })
//       .catch((err) => {
//         return err;
//       });
  } else if ((type = 'albums'))
    axios
      .get(`http://localhost:3001/albums/:${id}`)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        return err;
      });
}
export default GetById;
