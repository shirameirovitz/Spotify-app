import React from "react";
import OneItem from "./OneItem";

function Items({ items, type, title }) {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {items.slice(0, 5).map((item, i) => (
          <OneItem key={i} item={item} type={type} />
        ))}
      </ul>
    </>
  );
}
export default Items;
