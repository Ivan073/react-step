import React, { useState } from "react"
import NavBar from "./components/Materialize/NavBar/NavBar"

const App = () => {
  const [showFormUser, setShowFormUser] = useState(false);
  const [users, setUsers] = useState([{
    name: "John",
    phone: '7788'
  },
  {
    name: "Alice",
    phone: '2345'
  }]);

  const [user, setUser] = useState({name:'', phone: ''});

  const onChange = (e) =>{
    if(e.target.id == "name"){
      setUser({...user, name: e.target.value})
      console.log(e.target.value);
    }else{
      setUser({...user, phone: e.target.value})
      console.log(e.target.value);
    }

  }

  const addUser = () =>{
    setUsers([...users,user]);
    setUser({
      name: "",
      phone: ''
    });
  }
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <div className="row m-1">
          <div className="col s4">
            <a className="waves-effect waves-light btn" onClick={()=>{
              setShowFormUser(!showFormUser)
            }}>Add user</a>
          </div>
          <div className="col s8">
            {showFormUser  && <>
              <div className="input-field col s6">
                <i className="material-icons prefix">account_circle</i>
                <input id="name" value={user.name} type="text" className="validate" placeholder="Enter Name" onChange={onChange}/>
                <a className="waves-effect waves-light btn m-1" onClick={()=>{
                   addUser();
                }}>Add</a>
              </div>

              <div className="input-field col s6">
                <i className="material-icons prefix">phone</i>
                <input id="phone" value={user.phone} type="tel" className="validate" placeholder="Enter Phone" onChange={onChange}/>
                <a className="waves-effect waves-light right btn m-1">Cancel</a>
              </div>
              </>
            }
          </div>
        </div>
        <table>
        <thead>
          <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          { users && users.map((user)=>
            <tr>
            <td>{user.name}</td>
            <td>{user.phone}</td>
            <td>DELETE</td>
          </tr>
          )}
          
          
        </tbody>
      </table>
            
      </div>
    </div>
  );
}

export default App;
