import React, {useEffect, useState} from 'react'
import { devices } from "../components/DevicesItem";
import "./PageStyles.css";
const Devices = (props) => {
    const [phones, setPhones] = useState(null);
    const [sortedPhones, setSortedPhones] = useState(null);
    const [curSort, setCurSort] = useState("none");

    useEffect(()=>{
        setPhones(devices);
        setSortedPhones(devices);
    },[])


    const value = [
        'Apple',
        'Samsung',
        'Huawei',
    ]
    const onChange = (e) =>{
        if(e.target.value==""){
          setPhones(devices);
          setSortedPhones(devices);
          setCurSort("none");
        }else{
          setPhones(devices.filter((phone) => phone.brand == e.target.value));
          setSortedPhones(devices.filter((phone) => phone.brand == e.target.value));
          setCurSort("none");
        }
    }

    const sortDevices = (field) =>{
        if(field == "id"){
          setSortedPhones(sortedPhones.sort((a,b)=>{
            return a.id > b.id? -1:1;
          }));
        }
        else if(field == "name"){
          setSortedPhones(sortedPhones.sort((a,b)=>{
            return a.name > b.name? -1:1;
          }));
        }
        else if(field == "brand"){
          setSortedPhones(sortedPhones.sort((a,b)=>{
            return a.brand > b.brand? -1:1;
          }));
        }
        else if(field == "desc"){
          setSortedPhones(sortedPhones.sort((a,b)=>{
            return a.desc > b.desc? -1:1;
          }));
        }
        else if(field == "price"){
          
          setSortedPhones(sortedPhones.sort((a,b)=>{
            return a.price > b.price? -1:1;
          }));
        }

        if(field == curSort){
          setSortedPhones(sortedPhones.reverse());
          setCurSort(field+"2");
        }else{
          setCurSort(field);
        }
    }

  return (
    <div className="container table">
      <label>Brand Select</label>
      <select className="browser-default" onChange={onChange}>
        <option value="">
          Choose brand
        </option>
        {value.map((key) =>(
            <option key={key} value={key}>{key}</option>
        ))}
      </select>

      <table>
        <thead>
          <tr>
            <th><span className="clickable" onClick={()=>sortDevices("id") }>ID</span>
              <div className="sortIcons non-selectable">
                <i className="material-icons" id="id_up">arrow_drop_up</i>
                <i className="material-icons" id="id_down">arrow_drop_down</i>
              </div>
            </th>
            <th><span className="clickable" onClick={()=>sortDevices("name")}>Name</span>
              <div className="sortIcons non-selectable">
                <i className="material-icons" id="name_up">arrow_drop_up</i>
                <i className="material-icons" id="name_down">arrow_drop_down</i>
              </div>
            </th>
            <th><span className="clickable" onClick={()=>sortDevices("brand")}>Brand</span>
              <div className="sortIcons non-selectable" >
                <i className="material-icons" id="brand_up">arrow_drop_up</i>
                <i className="material-icons" id="brand_down">arrow_drop_down</i>
              </div>
            </th>
            <th><span className="clickable" onClick={()=>sortDevices("desc")}>Description</span>
              <div className="sortIcons non-selectable">
                <i className="material-icons" id="desc_up">arrow_drop_up</i>
                <i className="material-icons" id="desc_down">arrow_drop_down</i>
              </div>
            </th>
            <th><span className="clickable" onClick={()=>sortDevices("price")}>Price</span>
              <div className="sortIcons non-selectable">
                <i className="material-icons" id="price_up">arrow_drop_up</i>
                <i className="material-icons" id="price_down">arrow_drop_down</i>
              </div>
            </th>
          </tr>
        </thead>

        <tbody>
          {phones && phones.map((device) => (
            <tr>
              <td>{device.id}</td>
              <td>{device.name}</td>
              <td>{device.brand}</td>
              <td>{device.description}</td>
              <td>{device.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Devices;
