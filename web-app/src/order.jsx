import React, { useEffect, useState } from "react";
import {Link, useLocation} from 'react-router-dom'
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar ,faSpinner} from '@fortawesome/free-solid-svg-icons';
import { useParams } from "react-router-dom";
import './order.css'

function OrderItems() {
  const [Orders, setOrders]= useState(null);
  const{id} = useParams();
  const location = useLocation();
  const quantity = location.state?.quantity || 1;
  const [names,setNames]=useState('');
  const [phone,setPhone]=useState('');
  const [address,setAddress]=useState('');

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/recipes/${id}`)
      .then((res) => setOrders(res.data))
      .catch((err) => console.error("Error fetching product:", err));
  }, []);

  if (!Orders){ return <div className="loadingdiv">
    <h2><FontAwesomeIcon icon={faSpinner} spin/> Loading</h2>
    </div>
  };

  return (
    <div className="maincontentdiv3">
        <div className="contentdiv3" key={Orders.id}>
            <div className="imgdiv3">
            <img src={Orders.image} alt="" />
            <div className="quantselectdiv">
              <h3>{Orders.name}</h3>
              <p>Quantity: {quantity}</p>
            </div>
            </div>
            <div className="enterdetaildiv">
            <h1>Enter Details</h1>
            <input type="text" placeholder="Name" id="enter_name" value={names} onChange={(e)=>setNames(e.target.value)}/>
            <input type="number" placeholder="Phone no" id="enter_phone" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
            <textarea type="text" placeholder="Address" id="enter_address" value={address} onChange={(e)=>setAddress(e.target.value)}></textarea>
            <div className="cancelorderdiv">
            <Link to="/" className="cancelbtn">Cancel</Link>
            <Link to="/confirm" state={{quantity,name:names,number:phone,place:address}} id="enter_btn" 
  onClick={(e) => {
    let valid = true;

    if (!names.trim()) {
      document.getElementById("enter_name").style.boxShadow = "0px 0px 1px 0.5px rgba(255,0,0,0.9)";
      document.getElementById("enter_phone").style.boxShadow = "";
      document.getElementById("enter_address").style.boxShadow = "";
      valid = false;
    }
    else if (!phone.trim()) {
      document.getElementById("enter_name").style.boxShadow = "";
      document.getElementById("enter_phone").style.boxShadow = "0px 0px 1px 0.5px rgba(255,0,0,0.9)";
      document.getElementById("enter_address").style.boxShadow = "";
      valid = false;
    }
    else if (!address.trim()) {
      document.getElementById("enter_name").style.boxShadow = "";
      document.getElementById("enter_phone").style.boxShadow = "";
      document.getElementById("enter_address").style.boxShadow = "0px 0px 1px 0.5px rgba(255,0,0,0.9)";
      valid = false;
    }

    if (!valid) {
      e.preventDefault();
    }
  }} className="rupeebtn">₹ {(Orders.caloriesPerServing-1)*quantity}</Link>
            </div>
            </div>
        </div>
    </div>
  );
}

export default OrderItems;
