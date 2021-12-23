import React, {useEffect, useState} from 'react'
//import { devices } from "../components/DevicesItem";
import "./PageStyles.css";
import MyModal from '../components/MyModal/MyModal';
import http from '../http';


const Devices = (props) => {
    const [phones, setPhones] = useState(null);
    const [sortedPhones, setSortedPhones] = useState(null);
    const [curSort, setCurSort] = useState("none");
    const [showModal, setShowModal] = useState(false);
    const [devices, setDevices] = useState([]);
    const [nextId, setNextId] = useState(4);
    const [device, setDevice] = useState({id:5,name:"", brand:"", desc:"", price:""});

    const fetchDevices = async () =>{
      console.log("fetch start");
      const dev = await http.get('/devices');
      setDevices(dev.data);
      console.log("fetch end");
      console.log(dev.data);
      setPhones(dev.data)
      setSortedPhones(dev.data);
      setNextId(devices.length);
      console.log("Length: "+devices.length);
    }

    useEffect(()=>{
      fetchDevices();
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

    const addDevice = () =>{
      if(device.name == "" || device.brand==''){
        return 0;
      }
     
      setDevice({ ...device, id: nextId }); 
      http.post("/devices",{...device, id: nextId}).then((res) => {                //неправильный порядок передачи данных в структуре
        console.log(res);
        setDevices([...devices,device]);
        setPhones([...devices,device]);
      }).catch((err)=>console.log(err));
      setNextId(nextId+1);
    }

    const clear = () =>{
      setDevice({id:1,name:"", brand:"", desc:"", price:""});
    }

    const setDeviceField = (e)=>{
      if(e.target.id == "name"){
        setDevice({...device, name: e.target.value})
      }else if(e.target.id == "brand"){
        setDevice({...device, brand: e.target.value})
      }else if(e.target.id == "desc" ){
        setDevice({...device, desc: e.target.value})
      }else if(e.target.id == "price" ){
        setDevice({...device, price: e.target.value})
      }
    }

  return (
    <div className="container table">
      <MyModal visible={showModal} setVisible={setShowModal}>
        <>
              <div className="input-field col s6">
                <i className="material-icons prefix non-selectable">account_circle</i>
                <input id="name" value={device.name} type="text" className="validate" placeholder="Enter Name" onChange={setDeviceField}/>
                
              </div>

              <div className="input-field col s6">
                <i className="material-icons prefix non-selectable">phone</i>
                <input id="brand" value={device.brand} type="text" className="validate" placeholder="Enter Brand" onChange={setDeviceField}/>
                
              </div>

              <div className="input-field col s6">
                <i className="material-icons prefix non-selectable">phone</i>
                <input id="desc" value={device.desc} type="text" className="validate" placeholder="Enter Description" onChange={setDeviceField}/>
                
              </div>             

              <div className="input-field col s6">
                <i className="material-icons prefix non-selectable">email</i>
                <input id="price" value={device.price} type="text" pattern=".+@" className="validate" placeholder="Enter price" onChange={setDeviceField}/>
                <a className="waves-effect waves-light btn m-1" onClick={()=>{
                   addDevice();
                }}>Add</a>
                <a className="waves-effect waves-light right btn m-1"
                  onClick = {()=>clear()}
                >Cancel</a>
              </div>

              
              </>
        </MyModal>
        <div className="row m-1">
          <div className="col s4">
            <a className="waves-effect waves-light btn" onClick={()=>{
              setShowModal(true);
            }}>Add device</a> 
          </div>
        </div>

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
