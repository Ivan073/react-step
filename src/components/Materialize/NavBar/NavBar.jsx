import React,{useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../context";

const NavBar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);

  useEffect(() => {
      let button = document.getElementById("logout");
      button.classList.toggle("invisible");
  }, [isAuth])

  const logOut = () =>{
    setIsAuth(false);
    localStorage.removeItem('login');
    localStorage.removeItem('pass');
  }

  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="logo">
          Logo
        </a>
        <ul id="nav-mobile" className="right">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/devices">Devices</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li onClick={()=>logOut()}  className="clickable" id="logout">
            <Link to=""><i className="material-icons prefix non-selectable">exit_to_app</i></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
