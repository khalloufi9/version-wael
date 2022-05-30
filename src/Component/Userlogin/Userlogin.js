import React,{useState} from 'react'
import './Userlogin.css'
import { Navigate,Link } from 'react-router-dom';


const Userlogin = () => {

const [email,setEmail]=useState("")
const [password,setPassword]=useState("")

  return (
    
   
     
    <div style={{display:"flex",marginLeft:"50px"}}>
    <img src="https://baddal.tn/assets/images/user/login.svg" alt="connexion" style={{width:"500px"}}/>
     <div className='cadre-connexion'>
    <div className="auth-wrapper">
            <div className="auth-inner">
                <form>
                    <h2>Connexion</h2>

                    <div className="form-group">
                        <label >E-mail address</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter your Email"
                           onChange={(e)=>setEmail(e.target.value)}
                           value={email}
                        />
                    </div>

                    <div className="form-group">
                        <label >Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter your password"
                           onChange={(e)=>setPassword(e.target.value)}
                           value={password}
                     
                        />
                    </div>

                    
                    <Link  to={"/profile"}>
            
                    <button
                        type="submit"
                        className="btn btn-primary btn-block"
                        style={{marginTop:"10px"}}

                    >
                        Login
                    </button>
                   </Link>
                </form>
            </div>
        </div>
        </div>
        </div>
  )
}

export default Userlogin