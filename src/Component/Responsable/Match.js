import React from 'react'
import { Link } from 'react-router-dom'
const Match = () => {
  return (
    <div className='back'>
    <div className='border'>
         <div className='administrator'>
        <div className='div1'>
        <span className='text'>COMPLETE </span>
        <img style={{width:"80px"}} src="https://t4.ftcdn.net/jpg/03/08/33/75/360_F_308337583_CahQnaQMDdhkNnAY7Q0k7dhZZFCEmj7p.jpg"/>
        </div>
        <div style={{marginLeft:"20px"}}>
        <h6> Choose match date: </h6>
        <input type="datetime-local" value="2022-05-22T19:30" ></input>
        <h6> Choose the arbitrator: </h6>
        <select  >
    <option  >Choose the arbitrator</option>
    <option value="27" >27</option>
    <option value="28" >28</option>
    <option value="29" >29</option>
    <option value="30" >30</option>
    <option value="31" >31</option>
    <option value="32" >32</option>
  </select>
  <h6> Choose football pitch: </h6>
  <select  >
    <option  >Choose football pitch</option>
    <option value="27" >27</option>
    <option value="28" >28</option>
    <option value="29" >29</option>
    <option value="30" >30</option>
    <option value="31" >31</option>
    <option value="32" >32</option>
  </select>
        <button style={{backgroundColor:"black",color:"white"}}>Submit</button>
        <img  style={{width:"120px",marginTop:"10px",marginLeft:"60px"}} src="https://thumbs.dreamstime.com/b/football-match-date-vector-outline-illustration-icon-sign-isolated-contour-symbol-176008991.jpg"/>
        
        </div>
        </div> 
    </div>
    </div>
  )
}

export default Match