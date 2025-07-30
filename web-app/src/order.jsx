import React, { useEffect, useState } from "react";
import {useLocation} from 'react-router-dom'
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
    <div className="maincontentdiv2">
        <div className="contentdiv2" key={Orders.id}>
            <div className="imgdiv2">
            <img src={Orders.image} alt="" />
            </div>
            <div className="itemdetaildiv2">
            <h3>{Orders.name}</h3>
            <p>{quantity}</p>
            <button className="button">₹ {(Orders.caloriesPerServing-1)*quantity}</button>
            </div>
        </div>
    </div>
  );
}

export default OrderItems;
