import React, {useState} from 'react';
import UsersList from './components/users/UsersList';
import AddUser from './components/users/AddUser';

function App() {
  const [usersList, setUsersList]= useState([]);
  function addUserHandler(userName, userAge){
    setUsersList((prevUsersList)=>{
      return [...prevUsersList, {name:userName, age: userAge, id:Math.random().toString()}]
    })
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
