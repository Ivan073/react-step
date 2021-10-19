import React from 'react';
import MyInput from './MyInput';
import "./Interface.css";
import MyButton from '../components/MyButton/MyButton';

const Interface = (props) =>{
    return <div className="interface">
       <MyInput className={"ninety-width"}/>
       <MyButton className="okay">Okay</MyButton>
       <MyButton className="cancel" float="right">Cancel</MyButton>
    </div>
}

export default Interface;