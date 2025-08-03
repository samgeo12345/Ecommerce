import React, { useEffect, useState } from "react";
import {Link, useLocation,useNavigate} from 'react-router-dom'
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar ,faSpinner} from '@fortawesome/free-solid-svg-icons';
import './confirmorder.css'

function Confirmorder() {
  const details=useLocation();
  const navigate=useNavigate();
  const names=details.state.name;
  const phone=details.state.number;
  const address=details.state.place;
  const [card,setCard]=useState('');
  const [date,setDate]=useState('');
  const [cvv,setCvv]=useState('');
  const [holder,setHolder]=useState('');

  const purchasedOrder=()=>{
    let valid=true;
    if(!card.trim()){
        document.getElementById("card_id").style.boxShadow="0px 0px 1px rgba(255,0,0,0.9)";
        document.getElementById("date_id").style.boxShadow="";
        document.getElementById("cvv_id").style.boxShadow="";
        document.getElementById("holder_id").style.boxShadow="";
        valid=false;
    }
    else if(!date.trim()){
        document.getElementById("card_id").style.boxShadow="";
        document.getElementById("date_id").style.boxShadow="0px 0px 1px rgba(255,0,0,0.9)";
        document.getElementById("cvv_id").style.boxShadow="";
        document.getElementById("holder_id").style.boxShadow="";
        valid=false;
    }
    else if(!cvv.trim()){
        document.getElementById("card_id").style.boxShadow="";
        document.getElementById("date_id").style.boxShadow="";
        document.getElementById("cvv_id").style.boxShadow="0px 0px 1px rgba(255,0,0,0.9)";
        document.getElementById("holder_id").style.boxShadow="";
        valid=false;
    }
    else if(!holder.trim()){
        document.getElementById("card_id").style.boxShadow="";
        document.getElementById("date_id").style.boxShadow="";
        document.getElementById("cvv_id").style.boxShadow="";
        document.getElementById("holder_id").style.boxShadow="0px 0px 1px rgba(255,0,0,0.9)";
        valid=false;
    }
    else if(valid){
        navigate('/purchased',{
        state:{
            name:names,
            number:phone,
            place:address
        }
    })
    }
    else{
        alert("something wrong happened!");
    }
  }

  return (
    <div className="wholecreditcarddiv">
        <div className="creditcarddiv">
            <h1>Card Details</h1>
            <div className="cardinputs">
            <input type="number" id="card_id" placeholder="16-digit Card Number" value={card} onChange={(e)=>setCard(e.target.value)}/>
            <input type="text" id="date_id" placeholder="Expiry Date" value={date} onChange={(e)=>setDate(e.target.value)}/>
            <input type="number" id="cvv_id" placeholder="CVV" value={cvv} onChange={(e)=>setCvv(e.target.value)}/>
            <input type="text" id="holder_id" placeholder="Card Holder Name" value={holder} onChange={(e)=>setHolder(e.target.value)}/>
            </div>
            <hr />
            <div className="paybtndiv">
                <button onClick={purchasedOrder}>Pay</button>
            </div>
        </div>
    </div>
  )
}

export default Confirmorder