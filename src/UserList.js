import React, { useEffect } from "react";

function UserList({ users, setUsers, setAlbulms }) {
useEffect(() => {
  async function loadUser() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
        )
        const userFromApi = await response.json()
        console.log(userFromApi)
        setUsers(userFromApi)
          
    } catch (error) {
      
    }
  }
    
      loadUser()
      }, [])

const submitHandler = async (user) => {
  
  const response = await fetch(
`https://jsonplaceholder.typicode.com/albums?userId=${user.id}`
  )
  const data = await response.json()
  console.log(data)
  setAlbulms(data)
}
  return (
    <ul className="user-list">
      {users.map((user) => (
        <li key={user.id}>
          <button type="button" onClick={() => submitHandler(user)}>
            {user.name}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default UserList;
