import React,{useState, useRef, useEffect} from "react";
import Card from "../components/react-dnd/Card";
import CardBucket from "../components/react-dnd/CardBucket";


const Notes = () =>{
    return  <div className="notesBox">
        <Card id="1" text="" />
        <Card id="2" text="" />
        <Card id="3" text="" />
        <Card id="4" text="" />
        <Card id="5" text="" />
        <Card id="6" text="" />
        <Card id="7" text="" />
        <Card id="8" text="" />
        <Card id="9" text="" />
        <div className="bucketBox">
            <CardBucket id="buck1">Important</CardBucket>
            <CardBucket id="buck2">Not important</CardBucket>
        </div>
        </div>
}

export default Notes;