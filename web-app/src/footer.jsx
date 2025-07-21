import React from 'react'
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp,faFacebook, faLinkedinIn, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faBellConcierge } from '@fortawesome/free-solid-svg-icons';
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
function Footer() {
  return (
    <>
    <div className="footer">
        <div className="bottomhead">
            <h1><FontAwesomeIcon className='i' icon={faBellConcierge} /> Resta.</h1>
            <p><FontAwesomeIcon className='i' icon={faCopyright} /> 2025 | All rights reserved.</p>
        </div>
        <div className="aboutdiv">
            <h3>About Us</h3>
            <Link className='bottomlinks'>Our Story</Link>
            <Link className='bottomlinks'>Mission & Vision</Link>
            <Link className='bottomlinks'>Our Team</Link>
            <Link className='bottomlinks'>Testimonials</Link>
        </div>
        <div className="contactdiv">
            <h3>Contact Us</h3>
            <Link className='bottomlinks'>Resta12d@gmail.com</Link>
            <Link className='bottomlinks'>Restaweb45@yahoo.com</Link>
            <Link className='bottomlinks'>Restahotel@outlook.com</Link>
        </div>
        <div className="socialfollowdiv">
            <Link className='bottomlinks'><FontAwesomeIcon className='i' icon={faWhatsapp} /></Link>
            <Link className='bottomlinks'><FontAwesomeIcon className='i' icon={faLinkedinIn} /></Link>
            <Link className='bottomlinks'><FontAwesomeIcon className='i' icon={faFacebook} /></Link>
            <Link className='bottomlinks'><FontAwesomeIcon className='i' icon={faTelegram} /></Link>
        </div>
    </div>
    </>
  );
}

export default Footer