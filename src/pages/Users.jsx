import React, { useState } from "react"
import UserList from "../components/UserList"
import "./PageStyles.css";
import MyModal from "../components/MyModal/MyModal";

 
const Users = () => {
  const [showModal,setShowModal] = useState(false);
  const [showFormUser, setShowFormUser] = useState(false);
  const [nextId, setNextId] = useState(3);
  const [users, setUsers] = useState([{
    id: 1,
    name: "John",
    phone: '7788'
  },
  {
    id: 2,
    name: "Alice",
    phone: '2345'
  }]);

  const [user, setUser] = useState({name:'', phone: ''});

  const onChange = (e) =>{
    if(e.target.id == "name"){
      setUser({...user, name: e.target.value})
    }else{
      setUser({...user, phone: e.target.value})
    }
  }

  const addUser = () =>{
    if(user.name =="" && user.phone==''){
      return 0;
    }
    setUsers([...users,user]);
    setUser({
      id: nextId,
      name: "",
      phone: ''
    });
    console.log(user);
    console.log(users);
    setNextId(nextId+1);
  }

  const removeUser = (id) =>{
    const confirm = window.confirm("Do you want to delete?");
    if(confirm){
      setUsers(users.filter((user)=>user.id != id));
    }    
  }

  const clear = ()=>{
    setUser({
      id: nextId,
      name: "",
      phone: ''
    });
  }

  return (
    <div className="App">
      
      <div className="container table">
        
        <MyModal visible={showModal} setVisible={setShowModal}>
        <>
              <div className="input-field col s6">
                <i className="material-icons prefix non-selectable">account_circle</i>
                <input id="name" value={user.name} type="text" className="validate" placeholder="Enter Name" onChange={onChange}/>
                
              </div>

              <div className="input-field col s6">
                <i className="material-icons prefix non-selectable">phone</i>
                <input id="phone" value={user.phone} type="tel" className="validate" placeholder="Enter Phone" onChange={onChange}/>
                <a className="waves-effect waves-light btn m-1" onClick={()=>{
                   addUser();
                }}>Add</a>
                <a className="waves-effect waves-light right btn m-1"
                  onClick = {()=>clear()}
                >Cancel</a>
              </div>
              </>
        </MyModal>
        <div className="row m-1">
          <div className="col s4">
            <a className="waves-effect waves-light btn" onClick={()=>{
              setShowModal(true);
            }}>Add user</a> 
          </div>
        </div>
        <UserList deleteUser={removeUser} search>{users}</UserList>
            
      </div>

    </div>
  );
}

export default Users;
