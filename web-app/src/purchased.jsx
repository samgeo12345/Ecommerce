import React from 'react'
import {Link,useLocation} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar ,faSpinner,faCircleChevronLeft, faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import './purchased.css'

function Purchased() {
  return (
    <div className='wholepurchaseddiv'>
        <Link to="/" className='tohome'><FontAwesomeIcon icon={faCircleChevronLeft} /> Home</Link>
        <div className="purchaseddiv">
            <h1>Payment received successfully!</h1>
            <FontAwesomeIcon className='i' icon={faCircleCheck}/>
        </div>
    </div>
  )
}

export default Purchased