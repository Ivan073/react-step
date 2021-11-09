import React,{useState, useEffect} from "react";

const Home = () =>{
    
    return (<div className="home container">
        <div className="photo">photo</div>
        <div className="profileContainer">
            <input id="firstName" type="text" className="validate small right" placeholder="First name"/>
            <input id="lastName" type="text" className="validate small right" placeholder="Last Name"/>
            <input id="phone" type="text" className="validate small right" placeholder="Phone"/>
            <input id="date" type="text" className="validate small right" placeholder="Date of birth"/>
            <input id="email" type="email" className="validate small right" placeholder="E-mail"/>
            <input id="pass" type="password" className="validate small right" placeholder="Password"/>
        </div>
        
    </div>)
}

export default Home;