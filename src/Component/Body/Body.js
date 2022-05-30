import React from 'react'
import './Body.css'
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Body = () => {
    
    
      
  return (
     <div className="slide-container" >
      
      <Fade >
        
        <div >
          <img className='image'src="https://www.pixelstalk.net/wp-content/uploads/2016/03/Football-background-wallpaper-HD-ball.jpg" />
        </div>
        <div className="each-fade">
          <img className='image' src="https://wallpaper.dog/large/17141448.jpg" />
        </div>
        <div className="each-fade">
          <img className='image' src="https://cdn.wallpapersafari.com/17/67/GQIjKa.jpg" />
        </div>
       
      </Fade> 
    </div>
  
  )
}

export default Body