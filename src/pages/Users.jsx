import React, { useState, useEffect } from "react"
import UserList from "../components/UserList"
import "./PageStyles.css";
import MyModal from "../components/MyModal/MyModal";
import http from '../http';

import Loader from "react-loader-spinner";
 
const Users = () => {

  const [loading, setLoading] = useState(true);

  const fetchUsers = async () =>{
    const users = await http.get('/users');
    setUsers(users.data);
    setLoading(false);
    setNextId(users.data.length+1);
    console.log(users);
  }

  useEffect(() => {
    fetchUsers();
  },[])
  const [showModal,setShowModal] = useState(false);
  const [showFormUser, setShowFormUser] = useState(false);
  const [nextId, setNextId] = useState(0);
  const [users, setUsers] = useState(null);
  const [user, setUser] = useState({name:'', phone: ''});

  const onChange = (e) =>{
    if(e.target.id == "name"){
      setUser({...user, name: e.target.value})
    }else if(e.target.id == "phone"){
      setUser({...user, phone: e.target.value})
    }else if(e.target.id == "email" ){
      setUser({...user, email: e.target.value})
    }
  }

  const addUser = () =>{
    if(user.name =="" && user.phone=='' && user.email==0){
      return 0;
    }
   
   
    setUser({ ...user, id: nextId }); 
    http.post("/users",{...user, id: nextId}).then((res) => { 
      console.log(res);
      setUsers([...users,user]);
    }).catch((err)=>console.log(err));
    setNextId(nextId+1);
  }

  const removeUser = (id) =>{
    const confirm = window.confirm("Do you want to delete?");
    if(confirm){
      http.delete(`/users/${id}`).then((res)=>{
        console.log(res);
        setUsers(users.filter((user)=>user.id != id));
      }).catch((err)=>console.log(err));
     
    }    
  }

  const clear = ()=>{
    setUser({
      id: nextId,
      name: "",
      username: "",
      phone: "",
      email:"",
     
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
                
              </div>

              <div className="input-field col s6">
                <i className="material-icons prefix non-selectable">email</i>
                <input id="email" value={user.email} type="email" pattern=".+@" className="validate" placeholder="Enter email" onChange={onChange}/>
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
        {loading ?(
            <Loader
              className="loader"
              type="Grid"
              color="#c9424e"
              height={100}
              width={100}
            />
        ) : (<UserList deleteUser={removeUser} search>{users}</UserList>
          )
        }
        
            
      </div>

    </div>
  );
}

export default Users;
