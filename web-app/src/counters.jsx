import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './seperateitems.css'
function Counters({onCountChange}) {
  const [count, setCount] = useState(1);

  useEffect(()=>{
    onCountChange(count);
  },[count]);

  if(count<1){
    setCount(count + 1);
  }
  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);

  return (
    <>
      <button className="decrementbtn" onClick={decrement}>-</button>
      <p>{count}</p>
      <button className="incrementbtn" onClick={increment}>+</button>
    </>
  );
}

export default Counters;
