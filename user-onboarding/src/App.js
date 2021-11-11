import Form from './form';
import './App.css';
import React, {useState, } from 'react'; 

function App() {
  const [users,setUsers]= useState([])

  return (
    <div className="App">
      {users.map((user, idx) => {
        return(
          <React.Fragment key ={idx}>
            <p>{user.name}</p>
            <p>{user.email}</p>

          </React.Fragment>
        )
      })}

      <Form users={users} setUsers={setUsers} />
    </div>

  );
}
export default App;
