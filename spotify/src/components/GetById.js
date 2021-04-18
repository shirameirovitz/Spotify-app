const axios = require('axios');
function GetById(id) {
  axios
    .get(`http://localhost:3001/songs/:${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err;
    });
  axios
    .get(`http://localhost:3001/artists/:${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err;
    });
  axios
    .get(`http://localhost:3001/playlists/:${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err;
    });
  axios
    .get(`http://localhost:3001/alnums/:${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err;
    });
}
export default GetById;
