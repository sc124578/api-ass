import React, { useState } from "react";
import "./App.css";

import AlbumList from "./AlbumList";
import UserList from "./UserList";

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [albulms, setAlbulms] = useState()
  // Load data from https://jsonplaceholder.typicode.com/albums?userId=${user.id}

  return (
    <div className="App">
      <div className="left column">
        <UserList users={users} setUsers={setUsers} setAlbulms = {setAlbulms} />
      </div>
      <div className="right column">
        <AlbumList albulms={albulms} />
      </div>
    </div>
  );
}

export default App;
