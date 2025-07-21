import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBellConcierge,faCircleChevronLeft} from '@fortawesome/free-solid-svg-icons';
import { faGoogle,faMicrosoft,faFacebook } from "@fortawesome/free-brands-svg-icons";
import './login.css'
function Login(){
    return(
        <>
        <div className="loginpagediv">
            <div className="wholelogsetdiv">
                <div className="logheaderdiv">
                    <Link to="/" className='exithome'><FontAwesomeIcon icon={faCircleChevronLeft} /> back</Link>
                    <p><FontAwesomeIcon icon={faBellConcierge} className="i"/> Resta.<br></br><span>The platform for order meals</span></p>
                </div>
                <div className="logindiv">
                    <h2>Sign Up</h2>
                    <input type="text" placeholder='Email' />
                    <input type="password" placeholder='New Password' />
                    <input type="password" placeholder='Confirm Password'/>
                    <p className='signuplinkp'>Already a member? <Link to="/login" className='signuplink'>Login</Link></p>
                    <button>Sign Up</button>
                    <p>or continue with</p>
                    <div className="socialdiv">
                        <FontAwesomeIcon icon={faGoogle} className='i' />
                        <FontAwesomeIcon icon={faMicrosoft} className='i' />
                        <FontAwesomeIcon icon={faFacebook} className='i' />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Login