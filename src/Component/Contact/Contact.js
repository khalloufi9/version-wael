import React from 'react'
import './Contact.css'
import { Form,FloatingLabel } from 'react-bootstrap'
const Contact = () => {
  return (
   
   <div className='backk'>
     
   <div style={{marginLeft:"20px",marginTop:"30px"}}>
  <Form.Control style={{width:"550px",marginBottom:"20px"}}
    type="text"
    aria-describedby="passwordHelpBlock"
    placeholder='Name'
  />
  <Form.Control style={{width:"550px",marginBottom:"20px"}}
    type="text"
    placeholder='Company'
  />
  <Form.Control style={{width:"550px",marginBottom:"20px"}}
    type="text"
    placeholder='E-mail'
  />
  <Form.Control style={{width:"550px",marginBottom:"20px"}}
    type="text"
    placeholder='Phone'
  />
    <Form.Control
      as="textarea"
      placeholder="Comments"
      style={{ height: '100px',width:"550px" }}
    />
</div>

    <div  className='item1' >
    <h9 className='contact'>Contact</h9>
    <div style={{fontSize:"16px",color:"black",fontWeight:"500",marginTop:"20px"}}>
    <img style={{width:"30px"}} src="https://cdn-icons.flaticon.com/png/512/3095/premium/3095581.png?token=exp=1653339728~hmac=b59d90b6cee384ee1d24fa218d491700"/>
    20, rue Jean-Baptiste Pigalle. 75009 – Paris
    </div>
    <div style={{fontSize:"16px",color:"black",fontWeight:"500",marginTop:"20px"}}>
    <img style={{width:"30px"}} src="https://cdn-icons.flaticon.com/png/512/3894/premium/3894024.png?token=exp=1653341053~hmac=82aa9919b2324b8d0559d7485d88ae76"/>
    contact@gmail.com
    </div>
    <div style={{fontSize:"16px",color:"black",fontWeight:"500",marginTop:"20px"}}>
    <img style={{width:"30px"}} src="https://cdn-icons-png.flaticon.com/512/2947/2947981.png"/>
    +316 95 131 105
    </div>
    </div>
    
  </div>
  )
}

export default Contact