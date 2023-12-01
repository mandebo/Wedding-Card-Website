import React, {useEffect} from 'react'
import author from "../avatar-1.png";
import profile from "../profile-pic-2.jpeg";

import 'aos/dist/aos.css';
import Aos from 'aos';

const Aboutme = () => {

  useEffect(() => {
    Aos.init({ duration: 2000});

  }, []);

  const redirectGform = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSf1UNUwrftRNtjvkLFG-ChjNKrVn3YD4w7OkW7AMHQVAgBqiQ/viewform', '_blank'); 
  }
  return (
    <div className=' aboutcontain p-5 ' data-aos = "fade-up" >
      <div className='walimat'>
        <h3> Walimatul Urus</h3>
        <h3> Wedding Invitation</h3>
        <div className="abahumi">
          <h2> Ruslaan Abdul Ghani</h2>
          <h1> &</h1>
          <h2> Shahri binti Man</h2>
        </div>

        <div className="segalahormat">
           <p> Dengan segala hormatnya menjemput Y.B. / Datuk/ Dato'/ Datin/ Tuan/ Puan/ Sdra/ Sdri ke Majlis Perkahwinan</p>
        </div>

        <div className="segalahormat-2">
           <p> Cordially Invite Mr/Mdm/Ms to the wedding Reception of</p>
        </div>

        <div className="abahumi">
          <h2> Muhammad Anwar bin Ruslaan</h2>
          <h1> &</h1>
          <h2> Azreena</h2>
        </div>


        <div className="weddetails">
           <h3> Date</h3>
           <p> Saturday, 24 September 2022</p>
        </div>

        
        <div className="weddetails">
           <h3> Time</h3>
           <p> 11:00 AM - 4:00 PM</p>
        </div>

        
        <div className="weddetails">
           <h3> Venue</h3>
           <p> CORPORAT PARK, PUTRA NILAI 71800 Nilai, Negeri Sembilan, Malaysia</p>
        </div>

        <div className="daftar">
            <button onClick={redirectGform} type="button" className='btn btn-secondary'>Pendaftaran </button>
        </div>
      </div>

      
     
     
     
    </div>
  )
}

export default Aboutme
