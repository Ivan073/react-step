import React,{useContext, useEffect, useState} from "react";
import AuthContext from "../context";

const Login = () =>{
    const [wrongInput,setWrongInput] = useState(false);
    const {isAuth,setIsAuth,User1} = useContext(AuthContext);
    const [curInput,setCurInput] = useState({
        username: "",
        pass: "",
    })
    useEffect(()=>{
        let a = localStorage.getItem('login');
        let b = localStorage.getItem('pass');
        if(a && b){
            setIsAuth(true);
        }
    },[]);

    const setInput = (e)=>{
        if(e.target.id=="login"){
            setCurInput({
                username: e.target.value,
                pass: curInput.pass
            })
        }else if(e.target.id=="pass"){
            setCurInput({
                username: curInput.username,
                pass: e.target.value,
            })
        }
    }

    const logIn = () =>{
        if(User1.username==curInput.username && User1.pass==curInput.pass){           
            setIsAuth(true);
            localStorage.setItem('login', User1.username);
            localStorage.setItem('pass', User1.pass);
            localStorage.setItem('isAuth', true);
        }else{
            setWrongInput(true);
        }
       
    }

    return (<div className="home container">
        
        <div className="loginContainer hasBorder">
            <input id="login" type="text" className="validate small" placeholder="Login" onChange={setInput}/>
            <input id="pass" type="password" className="validate small" placeholder="Password" onChange={setInput}/>
            <a className="waves-effect waves-light btn m-1" onClick={()=>logIn()}>Log In</a>
            {wrongInput && <div>Wrong input</div>
            }
        </div>
       
        
    </div>)
}

export default Login;