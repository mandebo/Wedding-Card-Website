import React from 'react'

// react font awesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from "@fortawesome/free-solid-svg-icons";
import {FaCalendar, FaPhone, FaMapMarkerAlt} from 'react-icons/fa';

const Navbar = () => {

  const iconSize = 25;
  return (
    <nav className="sticky-navbar" >
        <div className="row mt-2 d-flex align-items-center justify-content-center">
            <div className="col-4 text-center">
                
                <div > <FaCalendar  size = { iconSize}/></div>
                <div> CALENDAR</div>
                    
                    
                    
            </div>
            <div className="col-4 text-center">
                <div> <FaPhone size = { iconSize} /></div>
                <div> CALL</div>
                    
            </div>
            <div className="col-4 text-center">
                 <div> <FaMapMarkerAlt size = { iconSize} /></div>
                <div> MAP</div>
            </div>

        </div>
   

  </nav>
  )
}

export default Navbar
