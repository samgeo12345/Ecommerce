import React, { useEffect, useState } from "react";
import {Link, useLocation} from 'react-router-dom'
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar ,faSpinner} from '@fortawesome/free-solid-svg-icons';
import { useParams } from "react-router-dom";
import './order.css'
import RecipeItems from "./seperateitem";

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
            <input type="text" placeholder="Name"/>
            <input type="number" placeholder="Phone no"/>
            <textarea type="text" placeholder="Address"></textarea>
            <div className="cancelorderdiv">
            <Link to="/" className="cancelbtn">Cancel</Link>
            <Link state={{quantity}} className="rupeebtn">₹ {(Orders.caloriesPerServing-1)*quantity}</Link>
            </div>
            </div>
        </div>
    </div>
  );
}

export default OrderItems;
