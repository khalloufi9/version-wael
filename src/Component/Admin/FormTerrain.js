import React from 'react'
import './Admin.css'
const FormTerrain = () => {
  return (
    <div className='back'>
        {/*terrain */}
       <div className='border'>
        <div className='administrator'>
        <div className='div1'>
        <span className='text'>ADD A FOOTBALL PITCH</span>
        <img style={{width:"80px"}} src="https://t4.ftcdn.net/jpg/03/08/33/75/360_F_308337583_CahQnaQMDdhkNnAY7Q0k7dhZZFCEmj7p.jpg"/>
        </div>
        <div style={{marginLeft:"20px"}}>
        <h6> Name: </h6>
        <input type="text" ></input>
        <h6> Address: </h6>
        <input type="text" ></input>
        <h6> Contact: </h6>
        <input type="text" ></input>
        <button style={{backgroundColor:"black",color:"white"}}>Submit</button>
        </div>
       </div>  
    </div>
    </div>
  )
}

export default FormTerrain