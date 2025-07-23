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
            <h1><FontAwesomeIcon className='i' icon={faBellConcierge} /> <span>Resta.</span></h1>
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
            <Link className='bottomlinks'>Gmail.com</Link>
            <Link className='bottomlinks'>Yahoo.com</Link>
            <Link className='bottomlinks'>Outlook.com</Link>
        </div>
        <div className="socialfollowdiv">
            <Link className='bottomlinks'><FontAwesomeIcon className='sociali' icon={faWhatsapp} /></Link>
            <Link className='bottomlinks'><FontAwesomeIcon className='sociali' icon={faLinkedinIn} /></Link>
            <Link className='bottomlinks'><FontAwesomeIcon className='sociali' icon={faFacebook} /></Link>
            <Link className='bottomlinks'><FontAwesomeIcon className='sociali' icon={faTelegram} /></Link>
        </div>
    </div>
    </>
  );
}

export default Footer