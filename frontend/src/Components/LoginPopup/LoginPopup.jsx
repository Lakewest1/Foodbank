import React from 'react'
import './LoginPopup.css'
import { useState } from 'react'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

  const [currState,SetCurrState] = useState('Login')
  
  return (
    <div className='login-Popup'>
      <form className="Login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() =>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="Login-popup-input">
          {currState==='Login'?<></>:<input type="text" placeholder='Your Name' required />}
        
          <input type="text" placeholder='Your Email' required />
           <input type="password" placeholder='Password' required/>
        </div>
        <button>{currState === 'Sign Up' ? 'Create account' : 'Login'}</button>
        <div className="Login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I strogly agree to the terms of use & privacy policy</p>
        </div>
        {currState === 'Login'
          ? <p>Create a new account? <span className='log-click' onClick={()=>SetCurrState('Sign Up')}>Click here</span></p>
          :
            <p>Already have an account? <span className='log-click' onClick={()=>SetCurrState('Login')}>Login here</span></p>

        }
       
      
      </form>

      
    </div>
  )
}

export default LoginPopup
