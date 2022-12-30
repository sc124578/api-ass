import React from "react";

function AlbumList({ albulms = [] }) {
  return  (
  <div>
  <p>Please click on a user name to the left</p>;
   {albulms.map((albulm) => (
    <ul>{albulm.title}</ul>
  ))} 
  </div>
  )
}

export default AlbumList;
