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
                    <h2>Login</h2>
                    <input type="text" placeholder='Email or Username' />
                    <input type="password" placeholder='Password'/>
                    <p className='signuplinkp'>New to this website? <Link to="/signup" className='signuplink'>Sign Up</Link></p>
                    <button>Login</button>
                    <p className='orcontinue'>or continue with</p>
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