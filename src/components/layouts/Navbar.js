import { NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

import './Navbar.css';

export default function Navbar() {
    // Initialisation ---------
    //  States ---------
    // Context ---------
    // Methods ---------
const getLinkStyle = ({isActive}) => (isActive ? 'navSelected' : null);
    // View ---------
    return (
        <nav>     
            <div className="login">
                <FaUserCircle size={70} />
            </div>       
            <div className="navItem">
                <NavLink to="/" className={getLinkStyle}>My Bookings</NavLink>
            </div>

            <div className="navItem">
                <NavLink to="/login" className={getLinkStyle}>Sign in</NavLink>
            </div>
        </nav>



        
    )

}

            