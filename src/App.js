import React, {useState} from "react";
import NavBar from "./components/Materialize/NavBar/NavBar";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./components/AppRoutes";
import AuthContext from "./context";

const App = () => {
  const[isAuth,setIsAuth] = useState(localStorage.getItem('isAuth'));
  const[User1,setUser1] = useState({
    username: "Ivan",
    pass: "123"
  })
  

  return (
    <AuthContext.Provider value={{isAuth,setIsAuth,User1}}>
      <BrowserRouter>
       <NavBar />
        <AppRoutes />
      </BrowserRouter>
    </AuthContext.Provider>
    
  );
};

export default App;
