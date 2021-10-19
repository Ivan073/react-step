import React, {useState} from 'react';
import './MyButton.css'

const MyButton = (props) =>{
    const [value, setValue] = useState('')
    return(<>
            <button  className = {props.className} onClick={()=>setValue('clicked')}>
            {value}
            {props.children}
            </button>
        </>
    ) 
    
}

export default MyButton;