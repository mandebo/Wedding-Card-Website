import React from 'react';
import Typed from "react-typed";


const Header = () => {

  const tulisan = "< Hello, I'm Aiman />";
  return (
    <div className='header-wrapper'> 
      <div className='main-info'>
          <h2 className='info-small'> Wedding Invitation For</h2>
          <h1> Anwar</h1>
          <h2> &</h2>
          <h1> Azreena</h1>

          <div className='date-info'>
              <div className='header-day'> Saturday </div>
              <div className='header-date'> September 24 2023</div>
          </div>

          <div className='address-info'>
            <p> CORPORAT PARK, PUTRA NILAI 71800 Nilai, Negeri Sembilan, Malaysia</p>

          </div>
          
          
      </div>
    </div>
  )
}

export default Header
