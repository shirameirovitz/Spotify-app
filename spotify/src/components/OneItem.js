import albums from "../JsonFiles/albums.json";
// import { Link } from "react-router-dom";

function OneItem({ item, type }) {
  const src =
    type === "songs"
      ? `../images/albums/${
          albums.find((album) => album.name === item.album).cover_img
        }`
      : `../images/${type}/${item.cover_img}`;
  //pages
  const page = getPage(type);

  return (
    <>
      {/* <Link to={`/${page}/${item.id}`}> */}
      <img className="itemImg" src={src} alt="" />
      <p className="title">{item.name}</p>
      {/* </Link> */}
 </>
  );
}

export default OneItem;

const getPage = (itemType) => {
  switch (itemType) {
    case "songs":
      return "song";
    case "albums":
      return "album";
    case "artists":
      return "artist";
    case "playlists":
      return "playlist";
    default:
      return "unknown";
  }
};
