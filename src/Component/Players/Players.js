import React,{useState} from 'react'
import { Card,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fade } from "react-slideshow-image";
import Data from '../data.json'
import './Player.css'
const Player = () => {
    return(
        <div className='back'>
          {
            Data.map(el=><Card style={{ width: '300px',height:"350px",opacity:"0.7",marginTop:"25px",marginLeft:"25px" }}>
                     <Card.Img variant="top" src={el.logo} style={{width:"150px",marginLeft:"70px",marginTop:"25px"}} />
                     <Card.Body>
                     <Card.Title>{el.name}</Card.Title>
                     <Card.Text style={{color:"black"}}>
                     Some quick example text to build on the card title and make up the bulk of
                     the card's content.
                      </Card.Text>
                      </Card.Body>
                      </Card>)
          }
          
        </div>
        
        )
    
  
}

export default Player