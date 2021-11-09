import React,{useContext} from "react";
import AuthContext from "../context";

const Login = () =>{
    
    const {isAuth,setIsAuth} = useContext(AuthContext);

    return (<div className="home container">
        
        <div className="loginContainer hasBorder">
            <input id="firstName" type="text" className="validate small" placeholder="Login"/>
            <input id="lastName" type="password" className="validate small" placeholder="Password"/>
            <a className="waves-effect waves-light btn m-1" onClick={()=>setIsAuth(true)}>Log In</a>
        </div>
       
        
    </div>)
}

export default Login;