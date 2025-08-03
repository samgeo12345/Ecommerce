import React from 'react'
import {useLocation} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar ,faSpinner, faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import './purchased.css'

function Purchased() {
    const purchase=useLocation();
    const names=purchase.state.name;
    const phone=purchase.state.number;
    const address=purchase.state.place;
  return (
    <div className='wholepurchaseddiv'>
        <div className="purchaseddiv">
            <h1>Payment received successfully!</h1>
            <FontAwesomeIcon className='i' icon={faCircleCheck}/>
        </div>
    </div>
  )
}

export default Purchased