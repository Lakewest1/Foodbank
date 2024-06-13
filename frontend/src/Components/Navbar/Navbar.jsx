import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext, } from '../../Context/StoreContext'
import { useContext } from 'react'


const Navbar = ({setShowLogin}) => {

  const [menu, setMenu] = useState('menu')
  
  const {getTotalCartAmount}=useContext(StoreContext)


  return (
    <>
      <h4 className='Welcome'><marquee behavior="smooth" direction="left" scrollAmount='6'>Welcome to Food bank <sup className='sup'>(A place for palatable dishes)</sup></marquee></h4>
    <div className='Navbar'>
      <Link to='/'><img src={assets.Grova} alt="" className='logo' /></Link>
      <Link to='/'><h1>Food-Bank</h1></Link>
      <ul className='navbar-menu'>
        <Link to='/' onClick={()=>setMenu('home')} className={menu==='home'? 'active':''}>Home</Link>
        <a href='#Explore-menu' onClick={()=>setMenu('menu')} className={menu==='menu'?'active':''}>Menu</a>
        <a href='#AppDownload' onClick={()=>setMenu('mobile-app')} className={menu==='mobile-app'?'active':''}>Mobile-App</a>
        <a href='#footer' onClick={()=>setMenu('contact-us')} className={menu==='contact-us'?'active':''}>Contact</a>
      </ul>
      <div className="nav-bar-right">
        <img src={assets.search_icon} alt=""/>
        <div className="navbar-search-icon">
          <Link to='/Cart'><img src={assets.basket_icon} alt=""/></Link>
          <div className={getTotalCartAmount()===0?'<></>':'dot'}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign in</button>
      </div>
      

      
      </div>
      </>
  )
}
      

export default Navbar
