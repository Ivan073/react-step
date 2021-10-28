import React, {useEffect, useState} from 'react'
import { devices } from "../components/DevicesItem";
import "./PageStyles.css";
const Devices = (props) => {
    const [phones, setPhones] = useState(null);
    useEffect(()=>{
        setPhones(devices)
    },[])


    const value = [
        'Apple',
        'Samsung',
        'Huawei',
    ]
    const onChange = (e) =>{
        if(e.target.value==""){
            setPhones(devices);
        }else
        setPhones(devices.filter((phone) => phone.brand == e.target.value))
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
            <th>ID</th>
            <th>Name</th>
            <th>Brand</th>
            <th>Description</th>
            <th>Price</th>
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
