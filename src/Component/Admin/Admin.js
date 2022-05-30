import React from 'react'
import './Admin.css'
import {Link} from 'react-router-dom'

const Admin = () => {
  return (
<div className='back'>
    <h1>..</h1>
    {/*Responsable */}
    <div className='border'>
        <div className='administrator'>
        <div className='div1'>
        <span className='text'>ADD A MANAGER</span>
        <img style={{width:"80px"}} src="https://t4.ftcdn.net/jpg/03/08/33/75/360_F_308337583_CahQnaQMDdhkNnAY7Q0k7dhZZFCEmj7p.jpg"/>
        </div>
        <div style={{marginLeft:"20px"}}>
        <h6> Name: </h6>
        <input type="text" ></input>
        <h6> Login: </h6>
        <input type="text" ></input>
        <h6> Password: </h6>
        <input type="password" ></input>
        <h6> Contact: </h6>
        <input type="password" ></input>
        <button>Add a picture</button>
        <button style={{backgroundColor:"black",color:"white"}}>Submit</button>
        <Link to="/arbitre">
        <img style={{width:"100px",height:"50px",marginLeft:"200px",marginTop:"10px"}} src="https://www.pngkit.com/png/detail/192-1929101_arrow-right-vector-clip-art-green-right-arrow.png" />
        </Link>
        </div>
        </div> 
    </div>
  
    </div>


   
  )
}

export default Admin