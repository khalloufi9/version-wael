import React from 'react'
import { Link } from 'react-router-dom'
const Player = () => {
  return (
    <div className='back'>
    <div className='border'>
         <div className='administrator'>
        <div className='div1'>
        <span className='text'>ADD A PLAYER</span>
        <img style={{width:"80px"}} src="https://t4.ftcdn.net/jpg/03/08/33/75/360_F_308337583_CahQnaQMDdhkNnAY7Q0k7dhZZFCEmj7p.jpg"/>
        </div>
        <div style={{marginLeft:"20px"}}>
        <h6> Post: </h6>
        <input type="text" ></input>
        <h6> Name: </h6>
        <input type="text" ></input>
        <button>Add a picture</button>
        <button style={{backgroundColor:"black",color:"white"}}>Submit</button>
        <Link to="/match">
        <img style={{width:"100px",height:"50px",marginLeft:"200px",marginTop:"10px"}} src="https://www.pngkit.com/png/detail/192-1929101_arrow-right-vector-clip-art-green-right-arrow.png" />
        </Link>
        </div>
        </div> 
    </div>
    </div>
    
  )
}

export default Player