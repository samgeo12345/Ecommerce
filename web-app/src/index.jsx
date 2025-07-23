import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBellConcierge, faMagnifyingGlass, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import Maincontents from './maincontent.jsx'
function Homepage({ searchTerm, onSearch }) {
  const handleInput = (e) => {
        onSearch(e.target.value);
    };
    return(
        <>
        <div className="navbardiv">
            <div className="logodiv">
                <h1><FontAwesomeIcon className='i' icon={faBellConcierge} /> Resta.</h1>
            </div>
            <div className="searchdiv">
                <div className="searchbar">
                    <input type="text" placeholder="Search" onInput={handleInput}/>
                    <FontAwesomeIcon className='i' icon={faMagnifyingGlass} />
                </div>
            </div>
            <div className="accdiv">
                <Link to='/login' className='link'><FontAwesomeIcon className='i' icon={faCircleUser} /><br /><span>Login</span></Link>
            </div>
            <div className="categorydiv">
                <Link to="/veg" className='categorylinks catlink1'>Veg Items</Link>
                <Link to="/nonveg" className='categorylinks'>Non-Veg Items</Link>
                <Link to="/drinks" className='categorylinks'>Drinks</Link>
                <Link to="/sweets" className='categorylinks'>Sweets</Link>
                <Link to="/desserts" className='categorylinks'>Desserts</Link>
            </div>
        </div>
        <div className="mainpagediv">
            <br />
            <br />
            <Maincontents searchTerm={searchTerm}/>
        </div>
        </>
    );
}
export default Homepage