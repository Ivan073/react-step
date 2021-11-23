import React,{useState, useRef, useEffect} from "react";
import axios from 'axios';
import Card from "../components/react-dnd/Card";
import CardBucket from "../components/react-dnd/CardBucket";


const Notes = () =>{
    return  <div className="notesBox">
        <Card>1</Card>
        <Card>12</Card>
        <Card>123</Card>
        <Card>1234</Card>
        <Card>12345</Card>
        <Card>123456</Card>
        <Card>1234567</Card>
        <Card>12345678</Card>
        <Card>123456789</Card>
        <div className="bucketBox">
            <CardBucket />
            <CardBucket />
        </div>
        </div>
}

export default Notes;