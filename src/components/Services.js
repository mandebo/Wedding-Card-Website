import React, {useEffect} from 'react'

import 'aos/dist/aos.css';
import Aos from 'aos';
import { faHome , faCode, faEye, faMagic, faDesktop, faNetworkWired} from "@fortawesome/free-solid-svg-icons";

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';


// Or for ES2015 module






const Services = () => {

    useEffect(() => {
        Aos.init({ duration: 2000});
    
      }, []);
  return (
    <div className='services'>
        <div className='py-5'>
            <div className='container'>
            <AwesomeSlider animation="cubeAnimation">
                <div data-src="/profile-pic.jpeg" />
                <div data-src="/path/to/image-1.png" />
                <div data-src="/path/to/image-2.jpg" />
            </AwesomeSlider>
               

            </div>
        </div>
      
    </div>
  )
}

export default Services
