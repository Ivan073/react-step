import React, {useState, useEffect} from 'react';

const Counter = (props) =>{
    const [count, setCount] = useState(0)

    const drawDiv = () =>{
        document.getElementById("extraDiv").innerHTML =""
        for(let i = 0;i<count;i++){
            console.log(count);
            let newElement = document.createElement("div");
            newElement.style.width="10vw";
            newElement.style.height="5vw";
            newElement.style.backgroundColor="Black";
            document.getElementById("extraDiv").appendChild(newElement);
        }
        
    }

    return(<div id = "CounterBody">

            <h3>Count:{count}</h3>
            <button onClick={()=>{
                setCount(count+1);
                drawDiv();
            }}> + </button>

            <button onClick={()=>{
                setCount(count-1);
                drawDiv();
                }}> - </button>
            <div id="extraDiv"></div>

        </div>
    ) 
    
}

export default Counter;