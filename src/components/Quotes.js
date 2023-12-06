import {React, useEffect, useState} from 'react'
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';




const Quotes = () => {

    const[quotes, setQuotes] = useState([""]);

    const images = [
        {"id":"102","author":"Ben Moore","width":4320,"height":3240,"url":"https://unsplash.com/photos/pJILiyPdrXI","download_url":"https://picsum.photos/id/102/4320/3240"},{"id":"103","author":"Ilham Rahmansyah","width":2592,"height":1936,"url":"https://unsplash.com/photos/DwTZwZYi9Ww","download_url":"https://picsum.photos/id/103/2592/1936"},
        {"id":"106","author":"Arvee Marie","width":2592,"height":1728,"url":"https://unsplash.com/photos/YnfGtpt2gf4","download_url":"https://picsum.photos/id/106/2592/1728"},
       {"id":"108","author":"Florian Klauer","width":2000,"height":1333,"url":"https://unsplash.com/photos/t1mqA3V3-7g","download_url":"https://picsum.photos/id/108/2000/1333"},
        {"id":"109","author":"Zwaddi","width":4287,"height":2392,"url":"https://unsplash.com/photos/YvYBOSiBJE8","download_url":"https://picsum.photos/id/109/4287/2392"},
    ]

  return (
    <div className='quotes-main'>
        <Carousel autoPlay infiniteLoop autoFocus stopOnHover showArrows="false">
            {
                images.map(image => <img src={image.download_url} alt={image.author}/>)
            }

        </Carousel>
        
        
      
    </div>
  )
}

export default Quotes
