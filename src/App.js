import React, {useState} from "react";
import NavBar from "./components/Materialize/NavBar/NavBar";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./components/AppRoutes";
import AuthContext from "./context";

import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

const App = () => {
  const[isAuth,setIsAuth] = useState(localStorage.getItem('isAuth'));
  const[User1,setUser1] = useState({
    username: "Ivan",
    pass: "123"
  })
  

  return (
    <DndProvider backend={HTML5Backend}>  
      <AuthContext.Provider value={{isAuth,setIsAuth}}>
        <BrowserRouter>      
        <NavBar />
        <AppRoutes />
        </BrowserRouter>
      </AuthContext.Provider>
    </DndProvider>
  );
};

export default App;
