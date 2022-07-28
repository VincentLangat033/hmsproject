import React from 'react'
import "./css/login.css"
function Login() {
  return (
    <div className='login'>
     <div className='loginWrapper'>
       <div className='loginLeft'>
         <h3 className='loginLogo'> HMS</h3>
         <span className='loginDesc'> Log in to begin</span>
       </div>
       <div className='loginRight'>
         <div className='loginBox'>
           <input placeholder="Email" className="loginInput" />
           <input placeholder="Password" className="loginInput" />
           <button className="loginButtton">Log In</button>
           <span className="loginForgot">Forgot Password? </span>
           <button className="loginRegisterButton">Create a New Account</button>
         </div>
       </div>
     </div>
    </div>
  )
}

export default Login