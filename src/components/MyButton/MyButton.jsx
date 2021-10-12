import React, {useState} from 'react';
import './MyButton.css'

const MyButton = (props) =>{
    const [value, setValue] = useState('default value')
    return(<>
            <div>{value}</div>
            <button  className = {props.className} onClick={()=>setValue('changeValue')}>
            {props.children}
            </button>
        </>
    ) 
    
}

export default MyButton;